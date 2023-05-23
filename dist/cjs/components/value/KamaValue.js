"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function KamaValue(_a) {
    var label = _a.label, value = _a.value;
    return (react_1.default.createElement("div", { className: 'KamaValue' },
        react_1.default.createElement("div", { className: 'rect' }),
        react_1.default.createElement("div", { className: 'wrapper' },
            react_1.default.createElement("div", { className: 'label' }, label),
            react_1.default.createElement("div", { className: 'value' }, value))));
}
exports.default = KamaValue;
//# sourceMappingURL=KamaValue.js.map