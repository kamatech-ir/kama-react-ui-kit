"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = require("react-dom");
var loading_hook_1 = tslib_1.__importDefault(require("../../hooks/loading.hook"));
var loading_logo_svg_1 = tslib_1.__importDefault(require("../../../assets/images/loading-logo.svg"));
var loading_spinner_svg_1 = tslib_1.__importDefault(require("../../../assets/images/loading-spinner.svg"));
function KamaLoading() {
    var loadingState = (0, loading_hook_1.default)().loadingState;
    var portalElement = document.getElementById('portal');
    var component = loadingState.show ? (react_1.default.createElement("div", { className: 'KamaLoading' },
        react_1.default.createElement("div", { className: 'loading' },
            react_1.default.createElement("img", { src: loading_logo_svg_1.default, className: 'logo', alt: '\u0644\u0637\u0641\u0627 \u06A9\u0645\u06CC \u0635\u0628\u0631 \u06A9\u0646\u06CC\u062F...' }),
            react_1.default.createElement("img", { src: loading_spinner_svg_1.default, className: 'spinner', alt: '\u0644\u0637\u0641\u0627 \u06A9\u0645\u06CC \u0635\u0628\u0631 \u06A9\u0646\u06CC\u062F...' })))) : null;
    return (0, react_dom_1.createPortal)(component, portalElement);
}
exports.default = KamaLoading;
//# sourceMappingURL=KamaLoading.js.map