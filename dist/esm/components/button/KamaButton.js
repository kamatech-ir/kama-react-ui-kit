import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
import KamaIcon from '../icon/KamaIcon';
export var KamaButtonTypes;
(function (KamaButtonTypes) {
    KamaButtonTypes[KamaButtonTypes["BUTTON"] = 0] = "BUTTON";
    KamaButtonTypes[KamaButtonTypes["SUBMIT"] = 1] = "SUBMIT";
    KamaButtonTypes[KamaButtonTypes["LINK"] = 2] = "LINK";
})(KamaButtonTypes || (KamaButtonTypes = {}));
export var KamaButtonColors;
(function (KamaButtonColors) {
    KamaButtonColors["DEFAULT"] = "DEFAULT";
    KamaButtonColors["PRIMARY"] = "PRIMARY";
    KamaButtonColors["SUCCESS"] = "SUCCESS";
    KamaButtonColors["CANCEL"] = "CANCEL";
})(KamaButtonColors || (KamaButtonColors = {}));
function KamaButton(_a) {
    var as = _a.as, _b = _a.color, color = _b === void 0 ? KamaButtonColors.PRIMARY : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.outlined, outlined = _d === void 0 ? false : _d, icon = _a.icon, _e = _a.disabled, disabled = _e === void 0 ? false : _e, children = _a.children, props = __rest(_a, ["as", "color", "className", "outlined", "icon", "disabled", "children"]);
    var classList = classNames('KamaButton', className, [color], {
        outlined: as === KamaButtonTypes.LINK || outlined,
        withIcon: as !== KamaButtonTypes.LINK && !!icon,
        disabled: disabled,
        empty: !children,
    });
    switch (as) {
        default:
        case KamaButtonTypes.BUTTON:
        case KamaButtonTypes.SUBMIT:
            return (React.createElement("button", __assign({}, props, { type: as === KamaButtonTypes.BUTTON ? 'button' : 'submit', className: classList, disabled: disabled }),
                icon ? React.createElement(KamaIcon, { icon: icon }) : null,
                children));
        case KamaButtonTypes.LINK:
            return disabled ? (React.createElement("span", __assign({}, props, { className: classList }), children)) : (React.createElement("a", __assign({}, props, { className: classList }), children));
    }
}
export default KamaButton;
