import { __assign, __rest } from "tslib";
import classNames from 'classnames';
import React from 'react';
var DIRECTION = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
};
function KamaRow(_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'horizontal' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, children = _a.children, props = __rest(_a, ["direction", "className", "children"]);
    return (React.createElement("div", __assign({}, props, { className: classNames('KamaRow', direction, className) }), children));
}
KamaRow.DIRECTION = DIRECTION;
export default KamaRow;
//# sourceMappingURL=KamaRow.js.map