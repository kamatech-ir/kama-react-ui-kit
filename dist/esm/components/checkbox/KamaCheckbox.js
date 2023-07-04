import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
function KamaCheckbox(_a) {
    var label = _a.label, _b = _a.toggle, toggle = _b === void 0 ? false : _b, _c = _a.error, error = _c === void 0 ? false : _c, props = __rest(_a, ["label", "toggle", "error"]);
    return (React.createElement("label", { className: classNames('KamaCheckbox', {
            disabled: props.disabled,
            error: error,
        }) },
        React.createElement("input", __assign({}, props, { type: 'checkbox' })),
        toggle ? React.createElement("div", { className: 'toggle' }) : React.createElement("div", { className: 'box' }),
        label));
}
export default KamaCheckbox;
