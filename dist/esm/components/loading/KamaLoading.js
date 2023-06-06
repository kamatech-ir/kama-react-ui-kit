import React from 'react';
import { createPortal } from 'react-dom';
import useLoading from '../../hooks/loading.hook';
import LoadingLogoSVG from '../../../assets/images/loading-logo.svg';
import LoadingSpinnerSVG from '../../../assets/images/loading-spinner.svg';
function KamaLoading() {
    var loadingState = useLoading().loadingState;
    var portalElement = document.getElementById('portal');
    var component = loadingState.show ? (React.createElement("div", { className: 'KamaLoading' },
        React.createElement("div", { className: 'loading' },
            React.createElement("img", { src: LoadingLogoSVG, className: 'logo', alt: '\u0644\u0637\u0641\u0627 \u06A9\u0645\u06CC \u0635\u0628\u0631 \u06A9\u0646\u06CC\u062F...' }),
            React.createElement("img", { src: LoadingSpinnerSVG, className: 'spinner', alt: '\u0644\u0637\u0641\u0627 \u06A9\u0645\u06CC \u0635\u0628\u0631 \u06A9\u0646\u06CC\u062F...' })))) : null;
    return createPortal(component, portalElement);
}
export default KamaLoading;
//# sourceMappingURL=KamaLoading.js.map