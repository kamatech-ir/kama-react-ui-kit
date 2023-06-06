import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';

const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
};

type KamaRowDirection = 'horizontal' | 'vertical';
type KamaRowProps = {
  direction?: KamaRowDirection;
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function KamaRow({ direction = 'horizontal', className = '', children, ...props }: KamaRowProps) {
  return (
    <div {...props} className={classNames('KamaRow', direction, className)}>
      {children}
    </div>
  );
}

KamaRow.DIRECTION = DIRECTION;
export default KamaRow;
