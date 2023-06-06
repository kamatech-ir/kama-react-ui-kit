"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = tslib_1.__importStar(require("react"));
var KamaColumn = (0, react_1.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, col = _a.col, sm = _a.sm, md = _a.md, lg = _a.lg, container = _a.container, _c = _a.contextClass, contextClass = _c === void 0 ? '' : _c, props = tslib_1.__rest(_a, ["children", "col", "sm", "md", "lg", "container", "contextClass"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, props, { ref: ref, className: (0, classnames_1.default)('KamaColumn', (_b = {
                col: !!col
            },
            _b["col".concat(col)] = !!col,
            _b["sm".concat(sm)] = !!sm,
            _b["md".concat(md)] = !!md,
            _b["lg".concat(lg)] = !!lg,
            _b.container = !!container,
            _b)) }),
        react_1.default.createElement("div", { className: (0, classnames_1.default)('context', contextClass) }, children)));
});
KamaColumn.displayName = 'KamaColumn';
exports.default = KamaColumn;
//# sourceMappingURL=KamaColumn.js.map