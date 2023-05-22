import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import KamaIcon, { IconTypes } from '../icon/KamaIcon';

export enum KamaButtonTypes {
  BUTTON,
  SUBMIT,
  LINK,
}
export enum KamaButtonColors {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
  SUCCESS = 'SUCCESS',
  CANCEL = 'CANCEL',
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type KamaButtonProps<T extends KamaButtonTypes> = {
  as?: T;
  color?: KamaButtonColors;
  className?: string;
  outlined?: boolean;
  icon?: IconTypes;
  disabled?: boolean;
  children?: ReactNode;
} & (T extends KamaButtonTypes.LINK ? AnchorProps : ButtonProps);

function KamaButton<T extends KamaButtonTypes>({
  as,
  color = KamaButtonColors.PRIMARY,
  className = '',
  outlined = false,
  icon,
  disabled = false,
  children,
  ...props
}: KamaButtonProps<T>) {
  const classList = classNames('KamaButton', className, [color], {
    outlined: as === KamaButtonTypes.LINK || outlined,
    withIcon: as !== KamaButtonTypes.LINK && !!icon,
    disabled: disabled,
    empty: !children,
  });

  switch (as) {
    default:
    case KamaButtonTypes.BUTTON:
    case KamaButtonTypes.SUBMIT:
      return (
        <button
          {...(props as ButtonProps)}
          type={as === KamaButtonTypes.BUTTON ? 'button' : 'submit'}
          className={classList}
          disabled={disabled}
        >
          {icon ? <KamaIcon icon={icon} /> : null}
          {children}
        </button>
      );

    case KamaButtonTypes.LINK:
      return disabled ? (
        <span {...(props as AnchorProps)} className={classList}>
          {children}
        </span>
      ) : (
        <a {...(props as AnchorProps)} className={classList}>
          {children}
        </a>
      );
  }
}

export default KamaButton;
