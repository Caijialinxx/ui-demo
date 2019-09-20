import React from 'react';
import {InputNumber} from '../../index';

const InputNumberDemo3: React.FunctionComponent = () => {
  return (
    <div className="input-number-demo-3">
      <div>
        <InputNumber size="large"/>
        <InputNumber/>
        <InputNumber size="small"/>
      </div>
      <div>
        <InputNumber controls="horizontal" size="large"/>
        <InputNumber controls="horizontal"/>
        <InputNumber controls="horizontal" size="small"/>
      </div>
      <div>
        <InputNumber width={100}/>
        <InputNumber width={100} controls="horizontal"/>
      </div>
    </div>
  );
};

export default InputNumberDemo3;