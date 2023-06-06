import React, { ReactNode } from 'react';

type KamaFormGroupProps = {
  children?: ReactNode;
};

function KamaFormGroup({ children }: KamaFormGroupProps) {
  return <div className='KamaFormGroup'>{children}</div>;
}

export default KamaFormGroup;
