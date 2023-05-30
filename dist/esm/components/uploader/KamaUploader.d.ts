import React, { InputHTMLAttributes } from 'react';
type KamaUploaderProps = {
    title?: string;
    description?: string;
    icon?: string;
    disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
declare function KamaUploader({ title, description, icon, disabled, ...props }: KamaUploaderProps): React.JSX.Element;
export default KamaUploader;
