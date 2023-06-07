import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { RootState } from '../redux/store';
import { setSidebarStatus } from '../redux/slices/layout.slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import KamaIcon, { IconTypes } from '../components/icon/KamaIcon';
import KamaInput from '../components/input/KamaInput';
import KamaConfirm from '../components/confirm/KamaConfirm';
import KamaLoading from '../components/loading/KamaLoading';
import ArmSVG from '../../assets/images/arm.svg';
import ProfileSVG from '../../assets/images/profile.svg';

// duplicate w/ breadcrumb
export type Sitemap = {
  title?: string;
  to?: string;
  match?: RegExp;
  icon?: IconTypes;
  onClick?: () => void;
  items?: Sitemap[];
};
export type MenuGroup = {
  title?: string;
  items?: Sitemap[];
};
export type LayoutUser = {
  name?: string;
  positionType?: number;
  positionTypeName?: string;
  departmentName?: string;
  picture?: string;
};
export type LayoutPosition = {
  id?: string;
  type?: number;
  typeName?: string;
};
export type LogoutTypes = 'all' | 'thisAppOnly';

type MenuItemProps = {
  label: string;
  icon: IconTypes;
  url?: string;
  isSeleted?: boolean;
  items?: any[];
  onClick?: any;
};
type LayoutProps = {
  title: string;
  subTitle: string;
  menus: MenuGroup[];
  currentUser?: LayoutUser;
  currentPositions?: LayoutPosition[];
  onPositionChange?: (selectedPosition: LayoutPosition) => void;
};

function MenuItem({
  label,
  icon,
  url,
  isSeleted,
  items = [],
  onClick = () => {
    return false;
  },
}: MenuItemProps) {
  const { sidebarStatus } = useAppSelector((state: RootState) => {
    return state.layout;
  });

  return (
    <div className={classNames('menuItem', { selected: isSeleted })} onClick={onClick}>
      {url ? (
        <Link to={url} className='content'>
          <KamaIcon icon={icon} />
          <span>{label}</span>
        </Link>
      ) : (
        <div className='content'>
          <KamaIcon icon={icon} />
          <span>{label}</span>
        </div>
      )}
      {isSeleted && items.length && sidebarStatus === 'expanded' ? (
        <div className='items'>
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.to}
                className={classNames('item', {
                  selected: item.isSelected,
                })}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function KamaLayout({ title, subTitle, menus = [], currentUser, currentPositions, onPositionChange }: LayoutProps) {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { sidebarStatus } = useAppSelector((state: RootState) => {
    return state.layout;
  });

  const [isPositionsVisible, setIsPositionsVisible] = useState<boolean>(false);

  const toggleSidebar = () => {
    dispatch(setSidebarStatus(sidebarStatus === 'collapsed' ? 'expanded' : 'collapsed'));
  };

  return (
    <div className='KamaLayout'>
      <div
        className={classNames('sidebar', {
          expanded: sidebarStatus === 'expanded',
        })}
      >
        <div className='appName'>
          <div className='logo'>
            <img src={ArmSVG} alt='رضایت‌سنجی' />
          </div>
          <div className='description'>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
          </div>
        </div>

        <div className='search'>
          <KamaInput className='searchInput' label='جستجو' icon='search' compact />
          <KamaIcon className='searchButton' icon='search' />
        </div>

        {menus.map((menuGroup, menuGroupIndex: number) => {
          return (
            <section key={menuGroupIndex} className='menuGroup'>
              <label>{menuGroup.title}</label>
              {menuGroup.items?.map((menuItem, menuItemIndex) => {
                return (
                  <MenuItem
                    key={menuItemIndex}
                    label={menuItem.title!}
                    icon={menuItem.icon!}
                    url={menuItem.to}
                    isSeleted={menuItem.match?.test(location.pathname)}
                    onClick={menuItem.onClick}
                    items={menuItem.items}
                  />
                );
              })}
            </section>
          );
        })}

        <div className='footer'>
          <div
            className='profile'
            onMouseEnter={() => {
              setIsPositionsVisible(true);
            }}
            onMouseLeave={() => {
              setIsPositionsVisible(false);
            }}
          >
            <div
              className='picture'
              style={{
                backgroundImage: `url(${
                  currentUser?.picture ? `data:image/jpeg;charset=utf-8;base64,${currentUser.picture}` : ProfileSVG
                })`,
              }}
            />
            <div className='description'>
              <div className='title'>
                {currentUser?.name}
                <span>{currentUser?.positionTypeName}</span>
              </div>
              <div className='subtitle'>{currentUser?.departmentName}</div>
            </div>

            {currentPositions?.length && currentPositions?.length > 1 && isPositionsVisible ? (
              <div className='positionWrapper'>
                <div className='positions'>
                  {currentPositions.map((position, index) => {
                    return (
                      <div
                        key={index}
                        className={classNames('item', {
                          disabled: position.type === currentUser?.positionType,
                        })}
                        onClick={() => {
                          onPositionChange!(position);
                        }}
                      >
                        {position.typeName}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <div className='separator' />
          <div className='option' onClick={toggleSidebar}>
            <KamaIcon icon={sidebarStatus === 'expanded' ? 'sidebar-collpase' : 'sidebar-expand'} />
            <span>بستن منوبار</span>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <Outlet />
      </div>

      <KamaConfirm />
      <KamaLoading />
    </div>
  );
}

export default KamaLayout;
