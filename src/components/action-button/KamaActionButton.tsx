import React from 'react';
import KamaButton from '../button/KamaButton';
import KamaIcon, { IconTypes } from '../icon/KamaIcon';

type KamaActionButtonProps = {
  title: string;
  subtitle?: string;
  label: string;
  icon: IconTypes;
  disabled?: boolean;
  onClick: any;
};

function KamaActionButton({ title, subtitle, label, icon, disabled, onClick }: KamaActionButtonProps) {
  return (
    <div className='KamaActionButton'>
      <KamaIcon icon={icon} />
      <div className='description'>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
      </div>
      <KamaButton onClick={onClick} disabled={disabled}>
        {label}
      </KamaButton>
    </div>
  );
}

export default KamaActionButton;
