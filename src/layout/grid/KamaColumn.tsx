import classNames from 'classnames';
import React, { HTMLAttributes, LegacyRef, ReactNode, forwardRef } from 'react';

type KamaColumnProps = {
  col?: number;
  sm?: number;
  md?: number;
  lg?: number;
  container?: string;
  contextClass?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const KamaColumn = forwardRef(
  (
    { children, col, sm, md, lg, container, contextClass = '', ...props }: KamaColumnProps,
    ref: LegacyRef<HTMLDivElement>,
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={classNames('KamaColumn', {
          col: !!col,
          [`col${col}`]: !!col,
          [`sm${sm}`]: !!sm,
          [`md${md}`]: !!md,
          [`lg${lg}`]: !!lg,
          container: !!container,
        })}
      >
        <div className={classNames('context', contextClass)}>{children}</div>
      </div>
    );
  },
);

KamaColumn.displayName = 'KamaColumn';
export default KamaColumn;
