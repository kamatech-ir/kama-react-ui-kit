import React from 'react';
import KamaIcon from '../icon/KamaIcon';
import EmptySVG from '../../assets/images/empty.svg';
function KamaDataTable(_a) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? [] : _c, _d = _a.actions, actions = _d === void 0 ? [] : _d, loadMore = _a.loadMore, total = _a.total, isLoading = _a.isLoading;
    return (React.createElement("div", { className: 'KamaDataTable' }, data.length || (!data.length && isLoading) ? (React.createElement("table", null,
        React.createElement("thead", null,
            React.createElement("tr", null,
                columns.map(function (column, index) {
                    return React.createElement("th", { key: index }, column.title);
                }),
                React.createElement("th", null))),
        React.createElement("tbody", null,
            data.map(function (row, index) {
                return (React.createElement("tr", { key: index },
                    columns.map(function (column, columnIndex) {
                        var displayValue = column.valueGetter
                            ? column.valueGetter(row[column.field], row)
                            : row[column.field] || 'ثبت نشده';
                        return (React.createElement("td", { key: columnIndex },
                            React.createElement("div", { className: 'content', title: column.tooltip
                                    ? column.tooltip(row[column.field], row)
                                    : displayValue && typeof displayValue === 'string' && displayValue.length > 30
                                        ? displayValue
                                        : '' }, displayValue && typeof displayValue === 'string' && displayValue.length > 30
                                ? "".concat(displayValue.substring(0, 30), "...")
                                : displayValue)));
                    }),
                    React.createElement("td", { className: 'actions' }, actions.map(function (action, actionIndex) {
                        return (React.createElement(KamaIcon, { key: actionIndex, icon: action.icon, onClick: function () {
                                action.onClick(row);
                            } }));
                    }))));
            }),
            data.length && data.length !== total && loadMore ? (React.createElement("tr", { className: 'loadMore', onClick: loadMore },
                React.createElement("td", { colSpan: columns.length + 1 }, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u0648\u0627\u0631\u062F \u0628\u06CC\u0634\u062A\u0631"))) : null))) : (React.createElement("div", { className: 'empty' },
        React.createElement("img", { src: EmptySVG, alt: '\u0645\u0648\u0631\u062F\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F' }),
        React.createElement("span", null, "\u0645\u0648\u0631\u062F\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F :(")))));
}
export default KamaDataTable;
//# sourceMappingURL=KamaDataTable.js.map