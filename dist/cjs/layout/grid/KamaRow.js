"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = tslib_1.__importDefault(require("react"));
var DIRECTION = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
};
function KamaRow(_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'horizontal' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, children = _a.children, props = tslib_1.__rest(_a, ["direction", "className", "children"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, props, { className: (0, classnames_1.default)('KamaRow', direction, className) }), children));
}
KamaRow.DIRECTION = DIRECTION;
exports.default = KamaRow;
//# sourceMappingURL=KamaRow.js.map