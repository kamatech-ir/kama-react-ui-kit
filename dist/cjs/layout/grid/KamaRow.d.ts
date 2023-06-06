import React, { HTMLAttributes, ReactNode } from 'react';
type KamaRowDirection = 'horizontal' | 'vertical';
type KamaRowProps = {
    direction?: KamaRowDirection;
    className?: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
declare function KamaRow({ direction, className, children, ...props }: KamaRowProps): React.JSX.Element;
declare namespace KamaRow {
    var DIRECTION: {
        HORIZONTAL: string;
        VERTICAL: string;
    };
}
export default KamaRow;
