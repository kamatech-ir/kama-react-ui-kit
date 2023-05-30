import React, { SelectHTMLAttributes } from 'react';
import { IconTypes } from '../icon/KamaIcon';
type KamaMultiSelectProps = {
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
    value?: any;
    error?: string;
    onChange?: (selected: any) => void;
} & SelectHTMLAttributes<HTMLSelectElement>;
declare function KamaMultiSelect({ label, containerClassName, className, searchable, options, filterBy, displayProcess, displayName, uniqueId, icon, value, onChange, error, }: KamaMultiSelectProps): React.JSX.Element;
export default KamaMultiSelect;
