import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { setSidebarStatus } from '../redux/slices/layout.slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import KamaIcon from '../components/icon/KamaIcon';
import KamaInput from '../components/input/KamaInput';
import KamaConfirm from '../components/confirm/KamaConfirm';
import KamaLoading from '../components/loading/KamaLoading';
import ArmSVG from '../../assets/images/arm.svg';
import ProfileSVG from '../../assets/images/profile.svg';
function MenuItem(_a) {
    var label = _a.label, icon = _a.icon, url = _a.url, isSeleted = _a.isSeleted, _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.onClick, onClick = _c === void 0 ? function () {
        return false;
    } : _c;
    var sidebarStatus = useAppSelector(function (state) {
        return state.layout;
    }).sidebarStatus;
    return (React.createElement("div", { className: classNames('menuItem', { selected: isSeleted }), onClick: onClick },
        url ? (React.createElement(Link, { to: url, className: 'content' },
            React.createElement(KamaIcon, { icon: icon }),
            React.createElement("span", null, label))) : (React.createElement("div", { className: 'content' },
            React.createElement(KamaIcon, { icon: icon }),
            React.createElement("span", null, label))),
        isSeleted && items.length && sidebarStatus === 'expanded' ? (React.createElement("div", { className: 'items' }, items.map(function (item, index) {
            return (React.createElement(Link, { key: index, to: item.to, className: classNames('item', {
                    selected: item.isSelected,
                }) }, item.label));
        }))) : null));
}
function KamaLayout(_a) {
    var title = _a.title, subTitle = _a.subTitle, _b = _a.menus, menus = _b === void 0 ? [] : _b, currentUser = _a.currentUser, currentPositions = _a.currentPositions, onPositionChange = _a.onPositionChange;
    var dispatch = useAppDispatch();
    var location = useLocation();
    var sidebarStatus = useAppSelector(function (state) {
        return state.layout;
    }).sidebarStatus;
    var _c = useState(false), isPositionsVisible = _c[0], setIsPositionsVisible = _c[1];
    var toggleSidebar = function () {
        dispatch(setSidebarStatus(sidebarStatus === 'collapsed' ? 'expanded' : 'collapsed'));
    };
    return (React.createElement("div", { className: 'KamaLayout' },
        React.createElement("div", { className: classNames('sidebar', {
                expanded: sidebarStatus === 'expanded',
            }) },
            React.createElement("div", { className: 'appName' },
                React.createElement("div", { className: 'logo' },
                    React.createElement("img", { src: ArmSVG, alt: '\u0631\u0636\u0627\u06CC\u062A\u200C\u0633\u0646\u062C\u06CC' })),
                React.createElement("div", { className: 'description' },
                    React.createElement("h1", null, title),
                    React.createElement("h2", null, subTitle))),
            React.createElement("div", { className: 'search' },
                React.createElement(KamaInput, { className: 'searchInput', label: '\u062C\u0633\u062A\u062C\u0648', icon: 'search', compact: true }),
                React.createElement(KamaIcon, { className: 'searchButton', icon: 'search' })),
            menus.map(function (menuGroup, menuGroupIndex) {
                var _a;
                return (React.createElement("section", { key: menuGroupIndex, className: 'menuGroup' },
                    React.createElement("label", null, menuGroup.title), (_a = menuGroup.items) === null || _a === void 0 ? void 0 :
                    _a.map(function (menuItem, menuItemIndex) {
                        var _a;
                        return (React.createElement(MenuItem, { key: menuItemIndex, label: menuItem.title, icon: menuItem.icon, url: menuItem.to, isSeleted: (_a = menuItem.match) === null || _a === void 0 ? void 0 : _a.test(location.pathname), onClick: menuItem.onClick, items: menuItem.items }));
                    })));
            }),
            React.createElement("div", { className: 'footer' },
                React.createElement("div", { className: 'profile', onMouseEnter: function () {
                        setIsPositionsVisible(true);
                    }, onMouseLeave: function () {
                        setIsPositionsVisible(false);
                    } },
                    React.createElement("div", { className: 'picture', style: {
                            backgroundImage: "url(".concat((currentUser === null || currentUser === void 0 ? void 0 : currentUser.picture) ? "data:image/jpeg;charset=utf-8;base64,".concat(currentUser.picture) : ProfileSVG, ")"),
                        } }),
                    React.createElement("div", { className: 'description' },
                        React.createElement("div", { className: 'title' }, currentUser === null || currentUser === void 0 ? void 0 :
                            currentUser.name,
                            React.createElement("span", null, currentUser === null || currentUser === void 0 ? void 0 : currentUser.positionTypeName)),
                        React.createElement("div", { className: 'subtitle' }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.departmentName)),
                    (currentPositions === null || currentPositions === void 0 ? void 0 : currentPositions.length) && (currentPositions === null || currentPositions === void 0 ? void 0 : currentPositions.length) > 1 && isPositionsVisible ? (React.createElement("div", { className: 'positionWrapper' },
                        React.createElement("div", { className: 'positions' }, currentPositions.map(function (position, index) {
                            return (React.createElement("div", { key: index, className: classNames('item', {
                                    disabled: position.type === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.positionType),
                                }), onClick: function () {
                                    onPositionChange(position);
                                } }, position.typeName));
                        })))) : null),
                React.createElement("div", { className: 'separator' }),
                React.createElement("div", { className: 'option', onClick: toggleSidebar },
                    React.createElement(KamaIcon, { icon: sidebarStatus === 'expanded' ? 'sidebar-collpase' : 'sidebar-expand' }),
                    React.createElement("span", null, "\u0628\u0633\u062A\u0646 \u0645\u0646\u0648\u0628\u0627\u0631")))),
        React.createElement("div", { className: 'wrapper' },
            React.createElement(Outlet, null)),
        React.createElement(KamaConfirm, null),
        React.createElement(KamaLoading, null)));
}
export default KamaLayout;
//# sourceMappingURL=Layout.js.map