import { __assign, __rest } from "tslib";
import classNames from 'classnames';
import React, { forwardRef } from 'react';
var KamaColumn = forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children, col = _a.col, sm = _a.sm, md = _a.md, lg = _a.lg, container = _a.container, _c = _a.contextClass, contextClass = _c === void 0 ? '' : _c, props = __rest(_a, ["children", "col", "sm", "md", "lg", "container", "contextClass"]);
    return (React.createElement("div", __assign({}, props, { ref: ref, className: classNames('KamaColumn', (_b = {
                col: !!col
            },
            _b["col".concat(col)] = !!col,
            _b["sm".concat(sm)] = !!sm,
            _b["md".concat(md)] = !!md,
            _b["lg".concat(lg)] = !!lg,
            _b.container = !!container,
            _b)) }),
        React.createElement("div", { className: classNames('context', contextClass) }, children)));
});
KamaColumn.displayName = 'KamaColumn';
export default KamaColumn;
