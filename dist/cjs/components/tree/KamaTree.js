"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var KamaIcon_1 = tslib_1.__importDefault(require("../icon/KamaIcon"));
var dots_svg_1 = tslib_1.__importDefault(require("../../../assets/images/dots.svg"));
function KamaTreeRow(_a) {
    var columns = _a.columns, actions = _a.actions, toggleVisibility = _a.toggleVisibility, onToggle = _a.onToggle, index = _a.index, item = _a.item, level = _a.level;
    var _b = (0, react_1.useState)(false), expanded = _b[0], setExpanded = _b[1];
    var handleToggle = function () {
        if (!toggleVisibility(item)) {
            return;
        }
        if (onToggle) {
            onToggle(!expanded, item, level);
        }
        setExpanded(!expanded);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("tr", { key: index, className: (0, classnames_1.default)({
                root: level === 1,
                expanded: expanded,
            }) },
            columns.map(function (column, columnIndex) {
                return (react_1.default.createElement("td", { key: columnIndex, style: columnIndex === 0 ? { paddingRight: "".concat(20 * (level - 1), "px") } : { paddingRight: '30px' } },
                    react_1.default.createElement("div", { className: 'content', title: column.valueGetter
                            ? typeof column.valueGetter(item[column.field], item) === 'object'
                                ? column
                                    .valueGetter(item[column.field], item)
                                    .props.children.filter(function (item) {
                                    return typeof item === 'string';
                                })
                                    .join(' ')
                                : column.valueGetter(item[column.field], item)
                            : item[column.field] },
                        columnIndex === 0 ? (react_1.default.createElement(KamaIcon_1.default, { className: 'icon', icon: toggleVisibility(item)
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
            actions.length ? (react_1.default.createElement("td", { className: 'actions' }, actions.map(function (action, actionIndex) {
                return !action.checkVisibility || (action.checkVisibility && action.checkVisibility(item)) ? (react_1.default.createElement(KamaIcon_1.default, { key: actionIndex, className: 'icon', icon: action.icon, onClick: function () {
                        action.onClick(item, index);
                    } })) : null;
            }))) : null),
        item.items && item.items.length && expanded ? (react_1.default.createElement(react_1.default.Fragment, null, item.items.map(function (subItem, subItemIndex) {
            return (react_1.default.createElement(KamaTreeRow, { key: subItemIndex, columns: columns, toggleVisibility: toggleVisibility, onToggle: onToggle, actions: actions, index: subItemIndex, item: subItem, level: level + 1 }));
        }))) : null));
}
function KamaTree(_a) {
    var columns = _a.columns, actions = _a.actions, toggleVisibility = _a.toggleVisibility, onToggle = _a.onToggle, _b = _a.data, data = _b === void 0 ? [] : _b;
    return (react_1.default.createElement("div", { className: 'KamaTree' },
        react_1.default.createElement("table", null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    columns.map(function (column, index) {
                        return (react_1.default.createElement("th", { key: index },
                            index !== 0 ? react_1.default.createElement("img", { src: dots_svg_1.default, alt: '\u062A\u0646\u0638\u06CC\u0645\u0627\u062A' }) : null,
                            " ",
                            column.title));
                    }),
                    (actions === null || actions === void 0 ? void 0 : actions.length) ? react_1.default.createElement("th", null) : null)),
            react_1.default.createElement("tbody", null, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
                return (react_1.default.createElement(KamaTreeRow, { key: index, columns: columns, actions: actions, toggleVisibility: toggleVisibility, onToggle: onToggle, index: index, item: item, level: 1 }));
            })))));
}
exports.default = KamaTree;
//# sourceMappingURL=KamaTree.js.map