"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
function KamaSample(_a) {
    var _b = _a.defaultValue, defaultValue = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(defaultValue), count = _c[0], setCount = _c[1];
    var inc = function () {
        setCount(function (prev) {
            return prev + 1;
        });
    };
    var dec = function () {
        setCount(function (prev) {
            return prev - 1;
        });
    };
    return (react_1.default.createElement("div", { className: 'KamaSample' },
        react_1.default.createElement("span", null,
            "current value: ",
            count),
        react_1.default.createElement("span", { onClick: inc }, "+"),
        " / ",
        react_1.default.createElement("span", { onClick: dec }, "-")));
}
exports.default = KamaSample;
//# sourceMappingURL=KamaSample.js.map