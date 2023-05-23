import { __assign, __rest } from "tslib";
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
function KamaLink(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["children", "disabled"]);
    var Content = (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'icon' }),
        children));
    return disabled ? (React.createElement("span", { className: classNames('KamaLink', 'disabled') }, Content)) : props.target === '_blank' ? (React.createElement("a", __assign({}, props, { href: props.to.toString(), className: 'KamaLink' }), Content)) : (React.createElement(Link, __assign({}, props, { className: 'KamaLink' }), Content));
}
export default KamaLink;
//# sourceMappingURL=KamaLink.js.map