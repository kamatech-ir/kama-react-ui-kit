"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KamaButtonColors = exports.KamaButtonTypes = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var KamaIcon_1 = tslib_1.__importDefault(require("../icon/KamaIcon"));
var KamaButtonTypes;
(function (KamaButtonTypes) {
    KamaButtonTypes[KamaButtonTypes["BUTTON"] = 0] = "BUTTON";
    KamaButtonTypes[KamaButtonTypes["SUBMIT"] = 1] = "SUBMIT";
    KamaButtonTypes[KamaButtonTypes["LINK"] = 2] = "LINK";
})(KamaButtonTypes = exports.KamaButtonTypes || (exports.KamaButtonTypes = {}));
var KamaButtonColors;
(function (KamaButtonColors) {
    KamaButtonColors["DEFAULT"] = "DEFAULT";
    KamaButtonColors["PRIMARY"] = "PRIMARY";
    KamaButtonColors["SUCCESS"] = "SUCCESS";
    KamaButtonColors["CANCEL"] = "CANCEL";
})(KamaButtonColors = exports.KamaButtonColors || (exports.KamaButtonColors = {}));
function KamaButton(_a) {
    var as = _a.as, _b = _a.color, color = _b === void 0 ? KamaButtonColors.PRIMARY : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.outlined, outlined = _d === void 0 ? false : _d, icon = _a.icon, _e = _a.disabled, disabled = _e === void 0 ? false : _e, children = _a.children, props = tslib_1.__rest(_a, ["as", "color", "className", "outlined", "icon", "disabled", "children"]);
    var classList = (0, classnames_1.default)('KamaButton', className, [color], {
        outlined: as === KamaButtonTypes.LINK || outlined,
        withIcon: as !== KamaButtonTypes.LINK && !!icon,
        disabled: disabled,
        empty: !children,
    });
    switch (as) {
        default:
        case KamaButtonTypes.BUTTON:
        case KamaButtonTypes.SUBMIT:
            return (react_1.default.createElement("button", tslib_1.__assign({}, props, { type: as === KamaButtonTypes.BUTTON ? 'button' : 'submit', className: classList, disabled: disabled }),
                icon ? react_1.default.createElement(KamaIcon_1.default, { icon: icon }) : null,
                children));
        case KamaButtonTypes.LINK:
            return disabled ? (react_1.default.createElement("span", tslib_1.__assign({}, props, { className: classList }), children)) : (react_1.default.createElement("a", tslib_1.__assign({}, props, { className: classList }), children));
    }
}
exports.default = KamaButton;
//# sourceMappingURL=KamaButton.js.map