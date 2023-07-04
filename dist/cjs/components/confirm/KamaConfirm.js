"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = require("react-dom");
var confirm_hook_1 = tslib_1.__importDefault(require("../../hooks/confirm.hook"));
var KamaFormGroup_1 = tslib_1.__importDefault(require("../../layout/grid/KamaFormGroup"));
var KamaRow_1 = tslib_1.__importDefault(require("../../layout/grid/KamaRow"));
var KamaColumn_1 = tslib_1.__importDefault(require("../../layout/grid/KamaColumn"));
var KamaButton_1 = tslib_1.__importDefault(require("../../components/button/KamaButton"));
var KamaModal_1 = tslib_1.__importDefault(require("../../components/modal/KamaModal"));
function KamaConfirm() {
    var _a = (0, confirm_hook_1.default)(), onConfirm = _a.onConfirm, onCancel = _a.onCancel, confirmState = _a.confirmState;
    var portalElement = document.getElementById('portal');
    var component = confirmState.show ? (react_1.default.createElement(KamaModal_1.default, { title: '\u062A\u0627\u06CC\u06CC\u062F \u0639\u0645\u0644\u06CC\u0627\u062A', onClose: onCancel, footer: react_1.default.createElement(KamaButton_1.default, { onClick: onConfirm }, "\u062A\u0627\u06CC\u06CC\u062F") },
        react_1.default.createElement(KamaFormGroup_1.default, null,
            react_1.default.createElement(KamaRow_1.default, null,
                react_1.default.createElement(KamaColumn_1.default, { col: 12 },
                    react_1.default.createElement("p", null, confirmState.message)))))) : null;
    return (0, react_dom_1.createPortal)(component, portalElement);
}
exports.default = KamaConfirm;
