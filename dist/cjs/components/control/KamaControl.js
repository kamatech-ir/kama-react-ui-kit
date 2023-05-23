"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
function KamaControlWrapper(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: 'KamaControlWrapper' }, children);
}
function KamaControl(_a) {
    var active = _a.active, children = _a.children, props = tslib_1.__rest(_a, ["active", "children"]);
    return (react_1.default.createElement("button", tslib_1.__assign({}, props, { type: 'button', className: (0, classnames_1.default)('KamaControl', {
            active: active,
        }) }), children));
}
KamaControl.Wrapper = KamaControlWrapper;
exports.default = KamaControl;
//# sourceMappingURL=KamaControl.js.map