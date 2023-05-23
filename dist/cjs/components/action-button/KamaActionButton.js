"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var KamaButton_1 = tslib_1.__importDefault(require("../button/KamaButton"));
var KamaIcon_1 = tslib_1.__importDefault(require("../icon/KamaIcon"));
function KamaActionButton(_a) {
    var title = _a.title, subtitle = _a.subtitle, label = _a.label, icon = _a.icon, disabled = _a.disabled, onClick = _a.onClick;
    return (react_1.default.createElement("div", { className: 'KamaActionButton' },
        react_1.default.createElement(KamaIcon_1.default, { icon: icon }),
        react_1.default.createElement("div", { className: 'description' },
            react_1.default.createElement("div", { className: 'title' }, title),
            react_1.default.createElement("div", { className: 'subtitle' }, subtitle)),
        react_1.default.createElement(KamaButton_1.default, { onClick: onClick, disabled: disabled }, label)));
}
exports.default = KamaActionButton;
//# sourceMappingURL=KamaActionButton.js.map