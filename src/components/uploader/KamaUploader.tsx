import React, { ChangeEvent, DragEvent, InputHTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import BlankFileSVG from '../../../assets/images/blank-file.svg';

type KamaUploaderProps = {
  title?: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

function KamaUploader({
  title = 'آپلود فایل',
  description = 'لطفا فایل خود را در این محدوده درگ کنید',
  icon = BlankFileSVG,
  disabled,
  ...props
}: KamaUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBrowseFile = () => {
    if (disabled) {
      return;
    }

    inputRef.current?.click();
  };
  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();

    if (disabled) {
      return;
    }

    const files = event.dataTransfer.files;

    if (files.length && props.onChange) {
      props.onChange({ target: { files } } as ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div
      className={classNames('KamaUploader', { disabled: disabled })}
      onClick={handleBrowseFile}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input type='file' ref={inputRef} {...(props as InputHTMLAttributes<HTMLInputElement>)} />

      <div className='wrapper'>
        <div className='icon'>
          <img src={icon} alt='فایل' />
        </div>
        <div className='content'>
          <div className='title'>{title}</div>
          <div className='description'>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default KamaUploader;
