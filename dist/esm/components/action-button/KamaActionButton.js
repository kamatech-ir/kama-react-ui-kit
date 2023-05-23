import React from 'react';
import KamaButton from '../button/KamaButton';
import KamaIcon from '../icon/KamaIcon';
function KamaActionButton(_a) {
    var title = _a.title, subtitle = _a.subtitle, label = _a.label, icon = _a.icon, disabled = _a.disabled, onClick = _a.onClick;
    return (React.createElement("div", { className: 'KamaActionButton' },
        React.createElement(KamaIcon, { icon: icon }),
        React.createElement("div", { className: 'description' },
            React.createElement("div", { className: 'title' }, title),
            React.createElement("div", { className: 'subtitle' }, subtitle)),
        React.createElement(KamaButton, { onClick: onClick, disabled: disabled }, label)));
}
export default KamaActionButton;
//# sourceMappingURL=KamaActionButton.js.map