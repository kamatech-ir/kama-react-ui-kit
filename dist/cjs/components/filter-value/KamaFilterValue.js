"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var KamaIcon_1 = tslib_1.__importDefault(require("../icon/KamaIcon"));
function KamaFilterValueWrapper(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: 'KamaFilterValueWrapper' }, children);
}
function KamaFilterValueIndicator() {
    return react_1.default.createElement("div", { className: 'KamaFilterValueIndicator' }, "* \u062C\u062F\u0648\u0644 \u0628\u0647 \u0635\u0648\u0631\u062A \u0641\u06CC\u0644\u062A\u0631 \u0634\u062F\u0647 \u062F\u0631 \u062D\u0627\u0644 \u0646\u0645\u0627\u06CC\u0634 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F.");
}
function KamaFilterValue(_a) {
    var label = _a.label, value = _a.value, _b = _a.onClick, onClick = _b === void 0 ? function () {
        return false;
    } : _b;
    return (react_1.default.createElement("div", { className: 'KamaFilterValue' },
        react_1.default.createElement(KamaIcon_1.default, { icon: 'close', onClick: onClick }),
        react_1.default.createElement("label", null, label),
        react_1.default.createElement("div", { className: 'value' }, value)));
}
KamaFilterValue.Wrapper = KamaFilterValueWrapper;
KamaFilterValue.Indicator = KamaFilterValueIndicator;
exports.default = KamaFilterValue;
