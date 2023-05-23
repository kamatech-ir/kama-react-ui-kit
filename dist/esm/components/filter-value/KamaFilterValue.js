import React from 'react';
import KamaIcon from '../icon/KamaIcon';
function KamaFilterValueWrapper(_a) {
    var children = _a.children;
    return React.createElement("div", { className: 'KamaFilterValueWrapper' }, children);
}
function KamaFilterValueIndicator() {
    return React.createElement("div", { className: 'KamaFilterValueIndicator' }, "* \u062C\u062F\u0648\u0644 \u0628\u0647 \u0635\u0648\u0631\u062A \u0641\u06CC\u0644\u062A\u0631 \u0634\u062F\u0647 \u062F\u0631 \u062D\u0627\u0644 \u0646\u0645\u0627\u06CC\u0634 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F.");
}
function KamaFilterValue(_a) {
    var label = _a.label, value = _a.value, _b = _a.onClick, onClick = _b === void 0 ? function () {
        return false;
    } : _b;
    return (React.createElement("div", { className: 'KamaFilterValue' },
        React.createElement(KamaIcon, { icon: 'close', onClick: onClick }),
        React.createElement("label", null, label),
        React.createElement("div", { className: 'value' }, value)));
}
KamaFilterValue.Wrapper = KamaFilterValueWrapper;
KamaFilterValue.Indicator = KamaFilterValueIndicator;
export default KamaFilterValue;
//# sourceMappingURL=KamaFilterValue.js.map