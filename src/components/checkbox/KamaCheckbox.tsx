import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

type KamaCheckboxProps = {
  label?: string;
  toggle?: boolean;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

function KamaCheckbox({ label, toggle = false, error = false, ...props }: KamaCheckboxProps) {
  return (
    <label
      className={classNames('KamaCheckbox', {
        disabled: props.disabled,
        error: error,
      })}
    >
      <input {...props} type='checkbox' />
      {toggle ? <div className='toggle' /> : <div className='box' />}
      {label}
    </label>
  );
}

export default KamaCheckbox;
