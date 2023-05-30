"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var KamaButton_1 = tslib_1.__importStar(require("../button/KamaButton"));
function KamaList(_a) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? [] : _c, _d = _a.actions, actions = _d === void 0 ? [] : _d;
    return (react_1.default.createElement("div", { className: 'KamaList' }, data.map(function (item, index) {
        return (react_1.default.createElement("div", { key: index, className: 'row' },
            react_1.default.createElement("div", { className: 'items' }, columns.map(function (column, columnIndex) {
                var displayValue = column.valueGetter
                    ? column.valueGetter(item[column.field], item)
                    : item[column.field];
                return !column.checkVisibility || column.checkVisibility(item[column.field], item) ? (react_1.default.createElement("div", { key: columnIndex, className: 'item' },
                    react_1.default.createElement("label", null, column.title),
                    react_1.default.createElement("span", null, displayValue && typeof displayValue === 'string' && displayValue.length > 30
                        ? "".concat(displayValue.substring(0, 30), "...")
                        : displayValue))) : null;
            })),
            react_1.default.createElement("div", { className: 'actions' }, actions.map(function (action, actionIndex) {
                return (react_1.default.createElement(KamaButton_1.default, { key: actionIndex, icon: action.icon, color: KamaButton_1.KamaButtonColors.CANCEL, onClick: function () {
                        action.onClick(item, index);
                    } }, !action.compact ? action.title : ''));
            }))));
    })));
}
exports.default = KamaList;
//# sourceMappingURL=KamaList.js.map