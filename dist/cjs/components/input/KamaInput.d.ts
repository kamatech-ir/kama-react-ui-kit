import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { IconTypes } from '../icon/KamaIcon';
export declare enum KamaInputTypes {
    INPUT = 0,
    TEXTAREA = 1
}
type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
type KamaInputProps<T extends KamaInputTypes> = {
    as?: T;
    money?: boolean;
    iban?: boolean;
    bankCard?: boolean;
    label?: string;
    icon?: IconTypes;
    prevent?: string;
    error?: string;
    ltr?: boolean;
    compact?: boolean;
    indicator?: string;
} & (T extends KamaInputTypes.INPUT ? InputProps : TextareaProps);
declare function KamaInput<T extends KamaInputTypes>({ as, className, placeholder, money, iban, bankCard, label, icon, prevent, error, ltr, compact, indicator, onChange, ...rest }: KamaInputProps<T>): React.JSX.Element;
export default KamaInput;
