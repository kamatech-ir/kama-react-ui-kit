"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
function KamaCheckbox(_a) {
    var label = _a.label, _b = _a.toggle, toggle = _b === void 0 ? false : _b, _c = _a.error, error = _c === void 0 ? false : _c, props = tslib_1.__rest(_a, ["label", "toggle", "error"]);
    return (react_1.default.createElement("label", { className: (0, classnames_1.default)('KamaCheckbox', {
            disabled: props.disabled,
            error: error,
        }) },
        react_1.default.createElement("input", tslib_1.__assign({}, props, { type: 'checkbox' })),
        toggle ? react_1.default.createElement("div", { className: 'toggle' }) : react_1.default.createElement("div", { className: 'box' }),
        label));
}
exports.default = KamaCheckbox;
