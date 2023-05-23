import React from 'react';

type KamaValueProps = {
  label?: string;
  value?: string | number;
};

function KamaValue({ label, value }: KamaValueProps) {
  return (
    <div className='KamaValue'>
      <div className='rect' />
      <div className='wrapper'>
        <div className='label'>{label}</div>
        <div className='value'>{value}</div>
      </div>
    </div>
  );
}

export default KamaValue;
