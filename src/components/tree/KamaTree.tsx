import React, { useState } from 'react';
import classNames from 'classnames';
import KamaIcon, { IconTypes } from '../icon/KamaIcon';
import DotsSVG from '../../../assets/images/dots.svg';

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

function KamaTreeRow({ columns, actions, toggleVisibility, onToggle, index, item, level }: any) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    if (!toggleVisibility(item)) {
      return;
    }

    if (onToggle) {
      onToggle(!expanded, item, level);
    }

    setExpanded(!expanded);
  };

  return (
    <>
      <tr
        key={index}
        className={classNames({
          root: level === 1,
          expanded: expanded,
        })}
      >
        {columns.map((column: Column, columnIndex: any) => {
          return (
            <td
              key={columnIndex}
              style={columnIndex === 0 ? { paddingRight: `${20 * (level - 1)}px` } : { paddingRight: '30px' }}
            >
              <div
                className='content'
                title={
                  column.valueGetter
                    ? typeof column.valueGetter(item[column.field], item) === 'object'
                      ? column
                          .valueGetter(item[column.field], item)
                          .props.children.filter((item: any) => {
                            return typeof item === 'string';
                          })
                          .join(' ')
                      : column.valueGetter(item[column.field], item)
                    : item[column.field]
                }
              >
                {columnIndex === 0 ? (
                  <KamaIcon
                    className='icon'
                    icon={
                      toggleVisibility(item)
                        ? level === 1
                          ? expanded
                            ? 'chevron-up'
                            : 'chevron-down'
                          : expanded
                          ? 'minus'
                          : 'plus'
                        : 'user'
                    }
                    onClick={handleToggle}
                  />
                ) : null}
                {column.valueGetter ? column.valueGetter(item[column.field], item) : item[column.field]}
              </div>
            </td>
          );
        })}
        {actions.length ? (
          <td className='actions'>
            {actions.map((action: Action, actionIndex: number) => {
              return !action.checkVisibility || (action.checkVisibility && action.checkVisibility(item)) ? (
                <KamaIcon
                  key={actionIndex}
                  className='icon'
                  icon={action.icon}
                  onClick={() => {
                    action.onClick(item, index);
                  }}
                />
              ) : null;
            })}
          </td>
        ) : null}
      </tr>
      {item.items && item.items.length && expanded ? (
        <>
          {item.items.map((subItem: any, subItemIndex: any) => {
            return (
              <KamaTreeRow
                key={subItemIndex}
                columns={columns}
                toggleVisibility={toggleVisibility}
                onToggle={onToggle}
                actions={actions}
                index={subItemIndex}
                item={subItem}
                level={level + 1}
              />
            );
          })}
        </>
      ) : null}
    </>
  );
}
function KamaTree({ columns, actions, toggleVisibility, onToggle, data = [] }: KamaTreeProps) {
  return (
    <div className='KamaTree'>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th key={index}>
                  {index !== 0 ? <img src={DotsSVG} alt='تنظیمات' /> : null} {column.title}
                </th>
              );
            })}
            {actions?.length ? <th /> : null}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <KamaTreeRow
                key={index}
                columns={columns}
                actions={actions}
                toggleVisibility={toggleVisibility}
                onToggle={onToggle}
                index={index}
                item={item}
                level={1}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default KamaTree;
