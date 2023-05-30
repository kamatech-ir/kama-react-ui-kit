import React from 'react';
import { createPortal } from 'react-dom';
import useLoading from 'hooks/loading.hook';
import LoadingLogoSVG from '../../../assets/images/loading-logo.svg';
import LoadingSpinnerSVG from '../../../assets/images/loading-spinner.svg';

function KamaLoading() {
  const { loadingState } = useLoading();

  const portalElement = document.getElementById('portal');

  const component = loadingState.show ? (
    <div className='KamaLoading'>
      <div className='loading'>
        <img src={LoadingLogoSVG} className='logo' alt='لطفا کمی صبر کنید...' />
        <img src={LoadingSpinnerSVG} className='spinner' alt='لطفا کمی صبر کنید...' />
      </div>
    </div>
  ) : null;

  return createPortal(component, portalElement!);
}

export default KamaLoading;
