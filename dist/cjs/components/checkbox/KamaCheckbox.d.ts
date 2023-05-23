import React, { InputHTMLAttributes } from 'react';
type KamaCheckboxProps = {
    label?: string;
    toggle?: boolean;
    error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
declare function KamaCheckbox({ label, toggle, error, ...props }: KamaCheckboxProps): React.JSX.Element;
export default KamaCheckbox;
