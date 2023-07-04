import React, { useState } from 'react';
import classNames from 'classnames';
import KamaIcon from '../icon/KamaIcon';
import DotsSVG from '../../../assets/images/dots.svg';
function KamaTreeRow(_a) {
    var columns = _a.columns, actions = _a.actions, toggleVisibility = _a.toggleVisibility, onToggle = _a.onToggle, index = _a.index, item = _a.item, level = _a.level;
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    var handleToggle = function () {
        if (!toggleVisibility(item)) {
            return;
        }
        if (onToggle) {
            onToggle(!expanded, item, level);
        }
        setExpanded(!expanded);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("tr", { key: index, className: classNames({
                root: level === 1,
                expanded: expanded,
            }) },
            columns.map(function (column, columnIndex) {
                return (React.createElement("td", { key: columnIndex, style: columnIndex === 0 ? { paddingRight: "".concat(20 * (level - 1), "px") } : { paddingRight: '30px' } },
                    React.createElement("div", { className: 'content', title: column.valueGetter
                            ? typeof column.valueGetter(item[column.field], item) === 'object'
                                ? column
                                    .valueGetter(item[column.field], item)
                                    .props.children.filter(function (item) {
                                    return typeof item === 'string';
                                })
                                    .join(' ')
                                : column.valueGetter(item[column.field], item)
                            : item[column.field] },
                        columnIndex === 0 ? (React.createElement(KamaIcon, { className: 'icon', icon: toggleVisibility(item)
                                ? level === 1
                                    ? expanded
                                        ? 'chevron-up'
                                        : 'chevron-down'
                                    : expanded
                                        ? 'minus'
                                        : 'plus'
                                : 'user', onClick: handleToggle })) : null,
                        column.valueGetter ? column.valueGetter(item[column.field], item) : item[column.field])));
            }),
            actions.length ? (React.createElement("td", { className: 'actions' }, actions.map(function (action, actionIndex) {
                return !action.checkVisibility || (action.checkVisibility && action.checkVisibility(item)) ? (React.createElement(KamaIcon, { key: actionIndex, className: 'icon', icon: action.icon, onClick: function () {
                        action.onClick(item, index);
                    } })) : null;
            }))) : null),
        item.items && item.items.length && expanded ? (React.createElement(React.Fragment, null, item.items.map(function (subItem, subItemIndex) {
            return (React.createElement(KamaTreeRow, { key: subItemIndex, columns: columns, toggleVisibility: toggleVisibility, onToggle: onToggle, actions: actions, index: subItemIndex, item: subItem, level: level + 1 }));
        }))) : null));
}
function KamaTree(_a) {
    var columns = _a.columns, actions = _a.actions, toggleVisibility = _a.toggleVisibility, onToggle = _a.onToggle, _b = _a.data, data = _b === void 0 ? [] : _b;
    return (React.createElement("div", { className: 'KamaTree' },
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    columns.map(function (column, index) {
                        return (React.createElement("th", { key: index },
                            index !== 0 ? React.createElement("img", { src: DotsSVG, alt: '\u062A\u0646\u0638\u06CC\u0645\u0627\u062A' }) : null,
                            " ",
                            column.title));
                    }),
                    (actions === null || actions === void 0 ? void 0 : actions.length) ? React.createElement("th", null) : null)),
            React.createElement("tbody", null, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
                return (React.createElement(KamaTreeRow, { key: index, columns: columns, actions: actions, toggleVisibility: toggleVisibility, onToggle: onToggle, index: index, item: item, level: 1 }));
            })))));
}
export default KamaTree;
