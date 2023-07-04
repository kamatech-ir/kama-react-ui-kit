import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
function KamaControlWrapper(_a) {
    var children = _a.children;
    return React.createElement("div", { className: 'KamaControlWrapper' }, children);
}
function KamaControl(_a) {
    var active = _a.active, children = _a.children, props = __rest(_a, ["active", "children"]);
    return (React.createElement("button", __assign({}, props, { type: 'button', className: classNames('KamaControl', {
            active: active,
        }) }), children));
}
KamaControl.Wrapper = KamaControlWrapper;
export default KamaControl;
