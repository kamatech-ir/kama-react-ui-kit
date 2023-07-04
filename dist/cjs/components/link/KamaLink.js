"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
function KamaLink(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = tslib_1.__rest(_a, ["children", "disabled"]);
    var Content = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'icon' }),
        children));
    return disabled ? (react_1.default.createElement("span", { className: (0, classnames_1.default)('KamaLink', 'disabled') }, Content)) : props.target === '_blank' ? (react_1.default.createElement("a", tslib_1.__assign({}, props, { href: props.to.toString(), className: 'KamaLink' }), Content)) : (react_1.default.createElement(react_router_dom_1.Link, tslib_1.__assign({}, props, { className: 'KamaLink' }), Content));
}
exports.default = KamaLink;
