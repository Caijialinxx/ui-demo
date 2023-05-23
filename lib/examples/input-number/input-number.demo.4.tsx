import React from 'react';
import {InputNumber} from '@/index';

const InputNumberDemo4: React.FunctionComponent = () => {
  return (
    <div className="input-number-demo-4">
      <InputNumber step={2} defaultValue={1}/>
      <InputNumber step={0.5} defaultValue={1}/>
    </div>
  );
};

export default InputNumberDemo4;