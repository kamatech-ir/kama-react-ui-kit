import React from 'react';
import { IconTypes } from '../components/icon/KamaIcon';
export type Sitemap = {
    title?: string;
    to?: string;
    match?: RegExp;
    icon?: IconTypes;
    onClick?: () => void;
    items?: Sitemap[];
};
export type MenuGroup = {
    title?: string;
    items?: Sitemap[];
};
export type LayoutUser = {
    name?: string;
    positionType?: number;
    positionTypeName?: string;
    departmentName?: string;
    picture?: string;
};
export type LayoutPosition = {
    id?: string;
    type?: number;
    typeName?: string;
};
export type LogoutTypes = 'all' | 'thisAppOnly';
type LayoutProps = {
    title: string;
    subTitle: string;
    menus: MenuGroup[];
    currentUser?: LayoutUser;
    currentPositions?: LayoutPosition[];
    onPositionChange?: (selectedPosition: LayoutPosition) => void;
};
declare function KamaLayout({ title, subTitle, menus, currentUser, currentPositions, onPositionChange }: LayoutProps): React.JSX.Element;
export default KamaLayout;
