import React, { useState } from 'react';

type KamaSampleProps = {
  defaultValue?: number;
};

function KamaSample({ defaultValue = 0 }: KamaSampleProps) {
  const [count, setCount] = useState<number>(defaultValue);

  const inc = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const dec = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };

  return (
    <div className='KamaSample'>
      <span>current value: {count}</span>
      <span onClick={inc}>+</span> / <span onClick={dec}>-</span>
    </div>
  );
}

export default KamaSample;
