import React, { InputHTMLAttributes } from 'react';
type KamaDatepickerProps = {
    label: string;
    onChange: any;
    preventFuture?: boolean;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
declare function KamaDatepicker({ label, value, onChange, preventFuture, error }: KamaDatepickerProps): React.JSX.Element;
export default KamaDatepicker;
