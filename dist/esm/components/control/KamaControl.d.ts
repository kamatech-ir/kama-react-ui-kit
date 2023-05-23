import React, { ButtonHTMLAttributes, ReactNode } from 'react';
type KamaControlWrapperProps = {
    children: ReactNode;
};
type KamaControlProps = {
    active: boolean;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
declare function KamaControlWrapper({ children }: KamaControlWrapperProps): React.JSX.Element;
declare function KamaControl({ active, children, ...props }: KamaControlProps): React.JSX.Element;
declare namespace KamaControl {
    var Wrapper: typeof KamaControlWrapper;
}
export default KamaControl;
