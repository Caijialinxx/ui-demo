import React from 'react';
import {Input} from '../../index';

const InputDemo3: React.FunctionComponent = () => {
  return (
    <div className="input-demo-3">
      <Input size="large" placeholder="large size"/>
      <Input placeholder="default size"/>
      <Input size="small" placeholder="small size"/>
    </div>
  );
};

export default InputDemo3;