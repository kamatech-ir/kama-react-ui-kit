import React, { useState } from 'react';
function KamaSample(_a) {
    var _b = _a.defaultValue, defaultValue = _b === void 0 ? 0 : _b;
    var _c = useState(defaultValue), count = _c[0], setCount = _c[1];
    var inc = function () {
        setCount(function (prev) {
            return prev + 1;
        });
    };
    var dec = function () {
        setCount(function (prev) {
            return prev - 1;
        });
    };
    return (React.createElement("div", { className: 'KamaSample' },
        React.createElement("span", null,
            "current value: ",
            count),
        React.createElement("span", { onClick: inc }, "+"),
        " / ",
        React.createElement("span", { onClick: dec }, "-")));
}
export default KamaSample;
//# sourceMappingURL=KamaSample.js.map