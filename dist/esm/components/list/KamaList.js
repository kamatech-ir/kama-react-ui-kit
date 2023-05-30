import React from 'react';
import KamaButton, { KamaButtonColors } from '../button/KamaButton';
function KamaList(_a) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? [] : _c, _d = _a.actions, actions = _d === void 0 ? [] : _d;
    return (React.createElement("div", { className: 'KamaList' }, data.map(function (item, index) {
        return (React.createElement("div", { key: index, className: 'row' },
            React.createElement("div", { className: 'items' }, columns.map(function (column, columnIndex) {
                var displayValue = column.valueGetter
                    ? column.valueGetter(item[column.field], item)
                    : item[column.field];
                return !column.checkVisibility || column.checkVisibility(item[column.field], item) ? (React.createElement("div", { key: columnIndex, className: 'item' },
                    React.createElement("label", null, column.title),
                    React.createElement("span", null, displayValue && typeof displayValue === 'string' && displayValue.length > 30
                        ? "".concat(displayValue.substring(0, 30), "...")
                        : displayValue))) : null;
            })),
            React.createElement("div", { className: 'actions' }, actions.map(function (action, actionIndex) {
                return (React.createElement(KamaButton, { key: actionIndex, icon: action.icon, color: KamaButtonColors.CANCEL, onClick: function () {
                        action.onClick(item, index);
                    } }, !action.compact ? action.title : ''));
            }))));
    })));
}
export default KamaList;
//# sourceMappingURL=KamaList.js.map