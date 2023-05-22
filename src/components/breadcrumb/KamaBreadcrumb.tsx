import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import KamaIcon from '../icon/KamaIcon';

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

function KamaBreadcrumb({ sitemap = [], pathname }: KamaBreadcrumbProps) {
  const [currentPath, setCurrentPath] = useState<Sitemap[]>([]);

  useEffect(() => {
    const findTarget = (current: Sitemap, path: Sitemap[]) => {
      if (current.match && current.match.test(pathname)) {
        return setCurrentPath(path);
      } else if (current.items) {
        for (let i = 0; i < current.items.length; i++) {
          const element: Sitemap = current.items[i];

          findTarget(element, path.concat([element]));
        }
      }
    };

    findTarget({ items: sitemap }, []);
  }, [pathname, sitemap]);

  return (
    <div className='KamaBreadcrumb'>
      {currentPath.map((item, index) => {
        const Item = (
          <span className={classNames('item', { last: currentPath.length === index + 1 })}>
            {item.to ? <Link to={item.to}>{item.title}</Link> : <>{item.title}</>}
          </span>
        );

        return (
          <Fragment key={index}>
            {Item}

            {currentPath.length - 1 !== index ? (
              <span className='separator'>
                <KamaIcon icon='chevron-left' />
              </span>
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}

export default KamaBreadcrumb;
