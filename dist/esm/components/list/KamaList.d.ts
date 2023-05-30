import React from 'react';
export type ListColumn = {
    field: any;
    title: any;
    valueGetter?: any;
    checkVisibility?: any;
};
type KamaListProps = {
    columns: ListColumn[];
    data?: any[];
    actions?: any[];
};
declare function KamaList({ columns, data, actions }: KamaListProps): React.JSX.Element;
export default KamaList;
