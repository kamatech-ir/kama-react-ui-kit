import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import KamaIcon from '../icon/KamaIcon';
function KamaBreadcrumb(_a) {
    var _b = _a.sitemap, sitemap = _b === void 0 ? [] : _b, pathname = _a.pathname;
    var _c = useState([]), currentPath = _c[0], setCurrentPath = _c[1];
    useEffect(function () {
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
    return (React.createElement("div", { className: 'KamaBreadcrumb' }, currentPath.map(function (item, index) {
        var Item = (React.createElement("span", { className: classNames('item', { last: currentPath.length === index + 1 }) }, item.to ? React.createElement(Link, { to: item.to }, item.title) : React.createElement(React.Fragment, null, item.title)));
        return (React.createElement(Fragment, { key: index },
            Item,
            currentPath.length - 1 !== index ? (React.createElement("span", { className: 'separator' },
                React.createElement(KamaIcon, { icon: 'chevron-left' }))) : null));
    })));
}
export default KamaBreadcrumb;
//# sourceMappingURL=KamaBreadcrumb.js.map