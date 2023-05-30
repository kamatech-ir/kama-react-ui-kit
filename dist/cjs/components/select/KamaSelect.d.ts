import React, { SelectHTMLAttributes } from 'react';
import { IconTypes } from '../icon/KamaIcon';
type KamaSelectProps = {
    label?: string;
    containerClassName?: string;
    className?: string;
    searchable?: boolean;
    options?: any[];
    filterBy?: (option: any, search: string) => void;
    displayProcess?: (option: any) => void;
    displayName?: string;
    uniqueId?: string;
    icon?: IconTypes;
    error?: string;
    onChange?: (selected: any) => void;
} & SelectHTMLAttributes<HTMLSelectElement>;
declare function KamaSelect({ label, containerClassName, className, searchable, options, filterBy, displayProcess, displayName, uniqueId, icon, value, onChange, error, disabled, }: KamaSelectProps): React.JSX.Element;
export default KamaSelect;
