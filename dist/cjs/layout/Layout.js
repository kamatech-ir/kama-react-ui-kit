"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var layout_slice_1 = require("../redux/slices/layout.slice");
var redux_hooks_1 = require("../hooks/redux.hooks");
var KamaIcon_1 = tslib_1.__importDefault(require("../components/icon/KamaIcon"));
var KamaInput_1 = tslib_1.__importDefault(require("../components/input/KamaInput"));
var KamaConfirm_1 = tslib_1.__importDefault(require("../components/confirm/KamaConfirm"));
var KamaLoading_1 = tslib_1.__importDefault(require("../components/loading/KamaLoading"));
var arm_svg_1 = tslib_1.__importDefault(require("../../assets/images/arm.svg"));
var profile_svg_1 = tslib_1.__importDefault(require("../../assets/images/profile.svg"));
function MenuItem(_a) {
    var label = _a.label, icon = _a.icon, url = _a.url, isSeleted = _a.isSeleted, _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.onClick, onClick = _c === void 0 ? function () {
        return false;
    } : _c;
    var sidebarStatus = (0, redux_hooks_1.useAppSelector)(function (state) {
        return state.layout;
    }).sidebarStatus;
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)('menuItem', { selected: isSeleted }), onClick: onClick },
        url ? (react_1.default.createElement(react_router_dom_1.Link, { to: url, className: 'content' },
            react_1.default.createElement(KamaIcon_1.default, { icon: icon }),
            react_1.default.createElement("span", null, label))) : (react_1.default.createElement("div", { className: 'content' },
            react_1.default.createElement(KamaIcon_1.default, { icon: icon }),
            react_1.default.createElement("span", null, label))),
        isSeleted && items.length && sidebarStatus === 'expanded' ? (react_1.default.createElement("div", { className: 'items' }, items.map(function (item, index) {
            return (react_1.default.createElement(react_router_dom_1.Link, { key: index, to: item.to, className: (0, classnames_1.default)('item', {
                    selected: item.isSelected,
                }) }, item.label));
        }))) : null));
}
function KamaLayout(_a) {
    var title = _a.title, subTitle = _a.subTitle, _b = _a.menus, menus = _b === void 0 ? [] : _b, currentUser = _a.currentUser, currentPositions = _a.currentPositions, onPositionChange = _a.onPositionChange;
    var dispatch = (0, redux_hooks_1.useAppDispatch)();
    var location = (0, react_router_dom_1.useLocation)();
    var sidebarStatus = (0, redux_hooks_1.useAppSelector)(function (state) {
        return state.layout;
    }).sidebarStatus;
    var _c = (0, react_1.useState)(false), isPositionsVisible = _c[0], setIsPositionsVisible = _c[1];
    var toggleSidebar = function () {
        dispatch((0, layout_slice_1.setSidebarStatus)(sidebarStatus === 'collapsed' ? 'expanded' : 'collapsed'));
    };
    return (react_1.default.createElement("div", { className: 'KamaLayout' },
        react_1.default.createElement("div", { className: (0, classnames_1.default)('sidebar', {
                expanded: sidebarStatus === 'expanded',
            }) },
            react_1.default.createElement("div", { className: 'appName' },
                react_1.default.createElement("div", { className: 'logo' },
                    react_1.default.createElement("img", { src: arm_svg_1.default, alt: '\u0631\u0636\u0627\u06CC\u062A\u200C\u0633\u0646\u062C\u06CC' })),
                react_1.default.createElement("div", { className: 'description' },
                    react_1.default.createElement("h1", null, title),
                    react_1.default.createElement("h2", null, subTitle))),
            react_1.default.createElement("div", { className: 'search' },
                react_1.default.createElement(KamaInput_1.default, { className: 'searchInput', label: '\u062C\u0633\u062A\u062C\u0648', icon: 'search', compact: true }),
                react_1.default.createElement(KamaIcon_1.default, { className: 'searchButton', icon: 'search' })),
            menus.map(function (menuGroup, menuGroupIndex) {
                var _a;
                return (react_1.default.createElement("section", { key: menuGroupIndex, className: 'menuGroup' },
                    react_1.default.createElement("label", null, menuGroup.title), (_a = menuGroup.items) === null || _a === void 0 ? void 0 :
                    _a.map(function (menuItem, menuItemIndex) {
                        var _a;
                        return (react_1.default.createElement(MenuItem, { key: menuItemIndex, label: menuItem.title, icon: menuItem.icon, url: menuItem.to, isSeleted: (_a = menuItem.match) === null || _a === void 0 ? void 0 : _a.test(location.pathname), onClick: menuItem.onClick, items: menuItem.items }));
                    })));
            }),
            react_1.default.createElement("div", { className: 'footer' },
                react_1.default.createElement("div", { className: 'profile', onMouseEnter: function () {
                        setIsPositionsVisible(true);
                    }, onMouseLeave: function () {
                        setIsPositionsVisible(false);
                    } },
                    react_1.default.createElement("div", { className: 'picture', style: {
                            backgroundImage: "url(".concat((currentUser === null || currentUser === void 0 ? void 0 : currentUser.picture) ? "data:image/jpeg;charset=utf-8;base64,".concat(currentUser.picture) : profile_svg_1.default, ")"),
                        } }),
                    react_1.default.createElement("div", { className: 'description' },
                        react_1.default.createElement("div", { className: 'title' }, currentUser === null || currentUser === void 0 ? void 0 :
                            currentUser.name,
                            react_1.default.createElement("span", null, currentUser === null || currentUser === void 0 ? void 0 : currentUser.positionTypeName)),
                        react_1.default.createElement("div", { className: 'subtitle' }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.departmentName)),
                    (currentPositions === null || currentPositions === void 0 ? void 0 : currentPositions.length) && (currentPositions === null || currentPositions === void 0 ? void 0 : currentPositions.length) > 1 && isPositionsVisible ? (react_1.default.createElement("div", { className: 'positionWrapper' },
                        react_1.default.createElement("div", { className: 'positions' }, currentPositions.map(function (position, index) {
                            return (react_1.default.createElement("div", { key: index, className: (0, classnames_1.default)('item', {
                                    disabled: position.type === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.positionType),
                                }), onClick: function () {
                                    onPositionChange(position);
                                } }, position.typeName));
                        })))) : null),
                react_1.default.createElement("div", { className: 'separator' }),
                react_1.default.createElement("div", { className: 'option', onClick: toggleSidebar },
                    react_1.default.createElement(KamaIcon_1.default, { icon: sidebarStatus === 'expanded' ? 'sidebar-collpase' : 'sidebar-expand' }),
                    react_1.default.createElement("span", null, "\u0628\u0633\u062A\u0646 \u0645\u0646\u0648\u0628\u0627\u0631")))),
        react_1.default.createElement("div", { className: 'wrapper' },
            react_1.default.createElement(react_router_dom_1.Outlet, null)),
        react_1.default.createElement(KamaConfirm_1.default, null),
        react_1.default.createElement(KamaLoading_1.default, null)));
}
exports.default = KamaLayout;
//# sourceMappingURL=Layout.js.map