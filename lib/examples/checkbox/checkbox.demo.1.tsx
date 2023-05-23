import React from 'react';
import {Checkbox} from '@/index';

const CheckboxDemo1: React.FunctionComponent = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('checked = ', e.target.checked);
  };
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  );
};

export default CheckboxDemo1;