import { __assign, __rest } from "tslib";
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
function KamaIcon(_a) {
    var icon = _a.icon, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["icon", "className"]);
    var _c = useState(), imageSource = _c[0], setImageSource = _c[1];
    useEffect(function () {
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
        import("assets/images/icons/".concat(displayIcon, ".svg"))
            .then(function (content) {
            setImageSource(content.default);
        })
            .catch(function () {
            console.log("error on loading the ".concat(displayIcon, " icon's image file"));
        });
    }, [icon]);
    var classList = classNames('KamaIcon', className);
    return (React.createElement("div", __assign({}, props, { className: classList }), imageSource ? React.createElement("img", { src: imageSource, alt: icon }) : null));
}
export default KamaIcon;
//# sourceMappingURL=KamaIcon.js.map