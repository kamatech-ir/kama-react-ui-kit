"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var KamaIcon_1 = tslib_1.__importDefault(require("../icon/KamaIcon"));
var empty_svg_1 = tslib_1.__importDefault(require("../../../assets/images/empty.svg"));
function KamaDataTable(_a) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? [] : _c, _d = _a.actions, actions = _d === void 0 ? [] : _d, loadMore = _a.loadMore, total = _a.total, isLoading = _a.isLoading;
    return (react_1.default.createElement("div", { className: 'KamaDataTable' }, data.length || (!data.length && isLoading) ? (react_1.default.createElement("table", null,
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                columns.map(function (column, index) {
                    return react_1.default.createElement("th", { key: index }, column.title);
                }),
                react_1.default.createElement("th", null))),
        react_1.default.createElement("tbody", null,
            data.map(function (row, index) {
                return (react_1.default.createElement("tr", { key: index },
                    columns.map(function (column, columnIndex) {
                        var displayValue = column.valueGetter
                            ? column.valueGetter(row[column.field], row)
                            : row[column.field] || 'ثبت نشده';
                        return (react_1.default.createElement("td", { key: columnIndex },
                            react_1.default.createElement("div", { className: 'content', title: column.tooltip
                                    ? column.tooltip(row[column.field], row)
                                    : displayValue && typeof displayValue === 'string' && displayValue.length > 30
                                        ? displayValue
                                        : '' }, displayValue && typeof displayValue === 'string' && displayValue.length > 30
                                ? "".concat(displayValue.substring(0, 30), "...")
                                : displayValue)));
                    }),
                    react_1.default.createElement("td", { className: 'actions' }, actions.map(function (action, actionIndex) {
                        return (react_1.default.createElement(KamaIcon_1.default, { key: actionIndex, icon: action.icon, onClick: function () {
                                action.onClick(row);
                            } }));
                    }))));
            }),
            data.length && data.length !== total && loadMore ? (react_1.default.createElement("tr", { className: 'loadMore', onClick: loadMore },
                react_1.default.createElement("td", { colSpan: columns.length + 1 }, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u0648\u0627\u0631\u062F \u0628\u06CC\u0634\u062A\u0631"))) : null))) : (react_1.default.createElement("div", { className: 'empty' },
        react_1.default.createElement("img", { src: empty_svg_1.default, alt: '\u0645\u0648\u0631\u062F\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F' }),
        react_1.default.createElement("span", null, "\u0645\u0648\u0631\u062F\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F :(")))));
}
exports.default = KamaDataTable;
//# sourceMappingURL=KamaDataTable.js.map