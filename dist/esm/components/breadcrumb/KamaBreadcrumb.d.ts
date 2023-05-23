import React from 'react';
export type Sitemap = {
    title?: string;
    to?: string;
    match?: RegExp;
    items?: Sitemap[];
};
type KamaBreadcrumbProps = {
    sitemap: Sitemap[];
    pathname: string;
};
declare function KamaBreadcrumb({ sitemap, pathname }: KamaBreadcrumbProps): React.JSX.Element;
export default KamaBreadcrumb;
