"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
function KamaIcon(_a) {
    var icon = _a.icon, _b = _a.className, className = _b === void 0 ? '' : _b, props = tslib_1.__rest(_a, ["icon", "className"]);
    var _c = (0, react_1.useState)(), imageSource = _c[0], setImageSource = _c[1];
    (0, react_1.useEffect)(function () {
        var displayIcon = icon;
        switch (icon) {
            case 'close':
                displayIcon = 'xmark';
                break;
            case 'chart':
                displayIcon = 'chart-column';
                break;
            case 'info':
                displayIcon = 'info-square';
                break;
            case 'download':
                displayIcon = 'arrow-down-to-square';
                break;
            case 'edit':
                displayIcon = 'pen';
                break;
            default:
                break;
        }
        Promise.resolve("".concat("assets/images/icons/".concat(displayIcon, ".svg"))).then(function (s) { return tslib_1.__importStar(require(s)); }).then(function (content) {
            setImageSource(content.default);
        })
            .catch(function () {
            console.log("error on loading the ".concat(displayIcon, " icon's image file"));
        });
    }, [icon]);
    var classList = (0, classnames_1.default)('KamaIcon', className);
    return (react_1.default.createElement("div", tslib_1.__assign({}, props, { className: classList }), imageSource ? react_1.default.createElement("img", { src: imageSource, alt: icon }) : null));
}
exports.default = KamaIcon;
//# sourceMappingURL=KamaIcon.js.map