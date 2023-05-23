import React from 'react';
import { LinkProps } from 'react-router-dom';
type KamaLinkProps = {
    disabled?: boolean;
} & LinkProps;
declare function KamaLink({ children, disabled, ...props }: KamaLinkProps): React.JSX.Element;
export default KamaLink;
