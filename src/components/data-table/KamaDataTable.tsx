import React from 'react';
import KamaIcon from '../icon/KamaIcon';

type KamaDataTableProps = {
  columns: any[];
  data: any[];
  actions?: any[];
  loadMore?: any;
  total?: number;
  isLoading?: boolean;
};

function KamaDataTable({ columns = [], data = [], actions = [], loadMore, total, isLoading }: KamaDataTableProps) {
  return (
    <div className='KamaDataTable'>
      {data.length || (!data.length && isLoading) ? (
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => {
                return <th key={index}>{column.title}</th>;
              })}
              <th>{/* <KamaIcon icon="config" /> */}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  {columns.map((column, columnIndex) => {
                    const displayValue = column.valueGetter
                      ? column.valueGetter(row[column.field], row)
                      : row[column.field] || 'ثبت نشده';

                    return (
                      <td key={columnIndex}>
                        <div
                          className='content'
                          title={
                            column.tooltip
                              ? column.tooltip(row[column.field], row)
                              : displayValue && typeof displayValue === 'string' && displayValue.length > 30
                              ? displayValue
                              : ''
                          }
                        >
                          {displayValue && typeof displayValue === 'string' && displayValue.length > 30
                            ? `${displayValue.substring(0, 30)}...`
                            : displayValue}
                        </div>
                      </td>
                    );
                  })}
                  <td className='actions'>
                    {actions.map((action, actionIndex) => {
                      return (
                        <KamaIcon
                          key={actionIndex}
                          icon={action.icon}
                          onClick={() => {
                            action.onClick(row);
                          }}
                        />
                      );
                    })}
                  </td>
                </tr>
              );
            })}

            {data.length && data.length !== total && loadMore ? (
              <tr className='loadMore' onClick={loadMore}>
                <td colSpan={columns.length + 1}>بارگذاری موارد بیشتر</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      ) : (
        <div className='empty'>
          {/* <img src={EmptySVG} alt='موردی برای نمایش پیدا نشد' /> */}
          <span>موردی برای نمایش پیدا نشد :(</span>
        </div>
      )}
    </div>
  );
}

export default KamaDataTable;
