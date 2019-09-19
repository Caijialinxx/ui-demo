import React from 'react';
import {Icon, Input} from '../../index';

const InputDemo5: React.FunctionComponent = () => {
  return (
    <div className="input-demo-3">
      <Input prefix={<Icon name="person"/>} placeholder="username"/>
      <Input prefix="¥" suffix="RMB"/>
    </div>
  );
};

export default InputDemo5;