import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type KamaControlWrapperProps = {
  children: ReactNode;
};
type KamaControlProps = {
  active: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function KamaControlWrapper({ children }: KamaControlWrapperProps) {
  return <div className='KamaControlWrapper'>{children}</div>;
}
function KamaControl({ active, children, ...props }: KamaControlProps) {
  return (
    <button
      {...props}
      type='button'
      className={classNames('KamaControl', {
        active: active,
      })}
    >
      {children}
    </button>
  );
}

KamaControl.Wrapper = KamaControlWrapper;
export default KamaControl;
