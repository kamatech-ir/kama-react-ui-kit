import React from 'react';
import { createPortal } from 'react-dom';
import useConfirm from '../../hooks/confirm.hook';
import KamaFormGroup from '../../layout/grid/KamaFormGroup';
import KamaRow from '../../layout/grid/KamaRow';
import KamaColumn from '../../layout/grid/KamaColumn';
import KamaButton from '../../components/button/KamaButton';
import KamaModal from '../../components/modal/KamaModal';

function KamaConfirm() {
  const { onConfirm, onCancel, confirmState } = useConfirm();

  const portalElement = document.getElementById('portal');

  const component = confirmState.show ? (
    <KamaModal title='تایید عملیات' onClose={onCancel} footer={<KamaButton onClick={onConfirm}>تایید</KamaButton>}>
      <KamaFormGroup>
        <KamaRow>
          <KamaColumn col={12}>
            <p>{confirmState.message}</p>
          </KamaColumn>
        </KamaRow>
      </KamaFormGroup>
    </KamaModal>
  ) : null;

  return createPortal(component, portalElement!);
}

export default KamaConfirm;
