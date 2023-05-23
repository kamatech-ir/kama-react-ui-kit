import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { IconTypes } from '../icon/KamaIcon';
export declare enum KamaButtonTypes {
    BUTTON = 0,
    SUBMIT = 1,
    LINK = 2
}
export declare enum KamaButtonColors {
    DEFAULT = "DEFAULT",
    PRIMARY = "PRIMARY",
    SUCCESS = "SUCCESS",
    CANCEL = "CANCEL"
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
declare function KamaButton<T extends KamaButtonTypes>({ as, color, className, outlined, icon, disabled, children, ...props }: KamaButtonProps<T>): React.JSX.Element;
export default KamaButton;
