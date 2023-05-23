import React from 'react';
type KamaDataTableProps = {
    columns: any[];
    data: any[];
    actions?: any[];
    loadMore?: any;
    total?: number;
    isLoading?: boolean;
};
declare function KamaDataTable({ columns, data, actions, loadMore, total, isLoading }: KamaDataTableProps): React.JSX.Element;
export default KamaDataTable;
