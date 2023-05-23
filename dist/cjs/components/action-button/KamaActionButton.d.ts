import React from 'react';
import { IconTypes } from '../icon/KamaIcon';
type KamaActionButtonProps = {
    title: string;
    subtitle?: string;
    label: string;
    icon: IconTypes;
    disabled?: boolean;
    onClick: any;
};
declare function KamaActionButton({ title, subtitle, label, icon, disabled, onClick }: KamaActionButtonProps): React.JSX.Element;
export default KamaActionButton;
