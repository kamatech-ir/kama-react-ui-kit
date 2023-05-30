import React from 'react';
import { IconTypes } from '../icon/KamaIcon';
type Column = {
    field: string;
    title: string;
    valueGetter?: any;
};
type Action = {
    title: string;
    icon: IconTypes;
    onClick: any;
    checkVisibility?: (data: any) => boolean;
};
type KamaTreeProps = {
    columns: Column[];
    actions?: Action[];
    toggleVisibility?: (item: any) => boolean;
    onToggle?: (idExpanded: boolean, item: any, level: number) => void;
    data?: any[];
};
declare function KamaTree({ columns, actions, toggleVisibility, onToggle, data }: KamaTreeProps): React.JSX.Element;
export default KamaTree;
