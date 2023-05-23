import React from 'react';
import {InputNumber} from '@/index';

const InputNumberDemo1: React.FunctionComponent = () => {
  return (
    <div className="input-number-demo-1">
      <InputNumber precision={2} defaultValue={3}/>
      <InputNumber min={0} max={3} defaultValue={0} controls="horizontal"/>
      <InputNumber controls={null}/>
    </div>
  );
};

export default InputNumberDemo1;