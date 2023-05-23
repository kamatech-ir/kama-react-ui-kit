import React, { useRef, useState, MouseEvent, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import KamaButton, { KamaButtonColors } from '../button/KamaButton';

type KamaModalProps = {
  title?: string;
  subTitle?: string;
  onClose?: any;
  footer?: any;
  bottomSpace?: boolean; // temp waiting for new design
  notice?: boolean;
  setIsModalVisible?: (status: boolean) => void;
  sidebar?: string; // used to be from redux 'expanded' or 'collapsed'
  children: any;
};

function KamaModal({
  title,
  subTitle,
  onClose,
  footer,
  bottomSpace = true,
  notice,
  setIsModalVisible = () => {
    return false;
  },
  sidebar,
  children,
}: KamaModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const closeHandler = () => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  };
  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target === ref.current) {
      closeHandler();
    }
  };
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, []);

  useEffect(() => {
    setIsModalVisible!(true);

    return () => {
      setIsModalVisible!(false);
    };
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div
      ref={ref}
      className={classNames('KamaModal', {
        sidebarExpanded: sidebar === 'expanded',
        bottomSpace: bottomSpace,
      })}
      onClick={handleBackdropClick}
    >
      <div
        className={classNames('body', {
          isClosed: 'hideSlide',
        })}
      >
        <div className='header'>
          <div className='titles'>
            <div className='title'>{title}</div>
            <div className='subTitle'>{subTitle}</div>
          </div>
        </div>
        <div className='content'>{children}</div>
        <div className='footer'>
          {footer}
          <KamaButton color={KamaButtonColors[notice ? 'PRIMARY' : 'CANCEL']} onClick={onClose}>
            {notice ? 'متوجه شدم' : 'انصراف'}
          </KamaButton>
        </div>
      </div>
    </div>
  );
}

export default KamaModal;
