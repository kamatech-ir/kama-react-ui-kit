import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';
// import ChevronDownAltSVG from 'assets/images/icons/chevron-down.svg';

type KamaLinkProps = {
  disabled?: boolean;
} & LinkProps;

function KamaLink({ children, disabled = false, ...props }: KamaLinkProps) {
  const Content = (
    <>
      <div className='icon'>{/* <img src={ChevronDownAltSVG} alt={children?.toString()} /> */}</div>
      {children}
    </>
  );

  return disabled ? (
    <span className={classNames('KamaLink', 'disabled')}>{Content}</span>
  ) : props.target === '_blank' ? (
    <a {...props} href={props.to.toString()} className='KamaLink'>
      {Content}
    </a>
  ) : (
    <Link {...props} className='KamaLink'>
      {Content}
    </Link>
  );
}

export default KamaLink;
