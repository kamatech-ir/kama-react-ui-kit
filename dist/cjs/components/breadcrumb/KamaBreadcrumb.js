"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var KamaIcon_1 = tslib_1.__importDefault(require("../icon/KamaIcon"));
function KamaBreadcrumb(_a) {
    var _b = _a.sitemap, sitemap = _b === void 0 ? [] : _b, pathname = _a.pathname;
    var _c = (0, react_1.useState)([]), currentPath = _c[0], setCurrentPath = _c[1];
    (0, react_1.useEffect)(function () {
        var findTarget = function (current, path) {
            if (current.match && current.match.test(pathname)) {
                return setCurrentPath(path);
            }
            else if (current.items) {
                for (var i = 0; i < current.items.length; i++) {
                    var element = current.items[i];
                    findTarget(element, path.concat([element]));
                }
            }
        };
        findTarget({ items: sitemap }, []);
    }, [pathname, sitemap]);
    return (react_1.default.createElement("div", { className: 'KamaBreadcrumb' }, currentPath.map(function (item, index) {
        var Item = (react_1.default.createElement("span", { className: (0, classnames_1.default)('item', { last: currentPath.length === index + 1 }) }, item.to ? react_1.default.createElement(react_router_dom_1.Link, { to: item.to }, item.title) : react_1.default.createElement(react_1.default.Fragment, null, item.title)));
        return (react_1.default.createElement(react_1.Fragment, { key: index },
            Item,
            currentPath.length - 1 !== index ? (react_1.default.createElement("span", { className: 'separator' },
                react_1.default.createElement(KamaIcon_1.default, { icon: 'chevron-left' }))) : null));
    })));
}
exports.default = KamaBreadcrumb;
