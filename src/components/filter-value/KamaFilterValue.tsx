import React, { ReactNode } from 'react';
import KamaIcon from '../icon/KamaIcon';

type KamaFilterValueWrapperProps = {
  children?: ReactNode;
};
type KamaFilterValueProps = {
  label?: string;
  value?: any;
  onClick?: () => void;
};

function KamaFilterValueWrapper({ children }: KamaFilterValueWrapperProps) {
  return <div className='KamaFilterValueWrapper'>{children}</div>;
}
function KamaFilterValueIndicator() {
  return <div className='KamaFilterValueIndicator'>* جدول به صورت فیلتر شده در حال نمایش می‌باشد.</div>;
}
function KamaFilterValue({
  label,
  value,
  onClick = () => {
    return false;
  },
}: KamaFilterValueProps) {
  return (
    <div className='KamaFilterValue'>
      <KamaIcon icon='close' onClick={onClick} />
      <label>{label}</label>
      <div className='value'>{value}</div>
    </div>
  );
}

KamaFilterValue.Wrapper = KamaFilterValueWrapper;
KamaFilterValue.Indicator = KamaFilterValueIndicator;
export default KamaFilterValue;
