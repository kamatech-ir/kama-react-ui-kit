import React, { ReactNode } from 'react';
type KamaFilterValueWrapperProps = {
    children?: ReactNode;
};
type KamaFilterValueProps = {
    label?: string;
    value?: any;
    onClick?: () => void;
};
declare function KamaFilterValueWrapper({ children }: KamaFilterValueWrapperProps): React.JSX.Element;
declare function KamaFilterValueIndicator(): React.JSX.Element;
declare function KamaFilterValue({ label, value, onClick, }: KamaFilterValueProps): React.JSX.Element;
declare namespace KamaFilterValue {
    var Wrapper: typeof KamaFilterValueWrapper;
    var Indicator: typeof KamaFilterValueIndicator;
}
export default KamaFilterValue;
