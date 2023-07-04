import React from 'react';
import { createPortal } from 'react-dom';
import useConfirm from '../../hooks/confirm.hook';
import KamaFormGroup from '../../layout/grid/KamaFormGroup';
import KamaRow from '../../layout/grid/KamaRow';
import KamaColumn from '../../layout/grid/KamaColumn';
import KamaButton from '../../components/button/KamaButton';
import KamaModal from '../../components/modal/KamaModal';
function KamaConfirm() {
    var _a = useConfirm(), onConfirm = _a.onConfirm, onCancel = _a.onCancel, confirmState = _a.confirmState;
    var portalElement = document.getElementById('portal');
    var component = confirmState.show ? (React.createElement(KamaModal, { title: '\u062A\u0627\u06CC\u06CC\u062F \u0639\u0645\u0644\u06CC\u0627\u062A', onClose: onCancel, footer: React.createElement(KamaButton, { onClick: onConfirm }, "\u062A\u0627\u06CC\u06CC\u062F") },
        React.createElement(KamaFormGroup, null,
            React.createElement(KamaRow, null,
                React.createElement(KamaColumn, { col: 12 },
                    React.createElement("p", null, confirmState.message)))))) : null;
    return createPortal(component, portalElement);
}
export default KamaConfirm;
