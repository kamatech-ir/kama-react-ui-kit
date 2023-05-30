import React from 'react';
import KamaButton, { KamaButtonColors } from '../button/KamaButton';

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

function KamaList({ columns = [], data = [], actions = [] }: KamaListProps) {
  return (
    <div className='KamaList'>
      {data.map((item, index) => {
        return (
          <div key={index} className='row'>
            <div className='items'>
              {columns.map((column, columnIndex) => {
                const displayValue = column.valueGetter
                  ? column.valueGetter(item[column.field], item)
                  : item[column.field];

                return !column.checkVisibility || column.checkVisibility(item[column.field], item) ? (
                  <div key={columnIndex} className='item'>
                    <label>{column.title}</label>
                    <span>
                      {displayValue && typeof displayValue === 'string' && displayValue.length > 30
                        ? `${displayValue.substring(0, 30)}...`
                        : displayValue}
                    </span>
                  </div>
                ) : null;
              })}
            </div>
            <div className='actions'>
              {actions.map((action, actionIndex) => {
                return (
                  <KamaButton
                    key={actionIndex}
                    icon={action.icon}
                    color={KamaButtonColors.CANCEL}
                    onClick={() => {
                      action.onClick(item, index);
                    }}
                  >
                    {!action.compact ? action.title : ''}
                  </KamaButton>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KamaList;
