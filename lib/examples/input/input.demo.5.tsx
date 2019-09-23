import React from 'react';
import {Icon, Input} from '../../index';

const InputDemo5: React.FunctionComponent = () => {
  return (
    <div>
      <div style={{marginBottom: '8px'}}>
        <Input prefix={<Icon name="person"/>} placeholder="username"/>
      </div>
      <div>
        <Input prefix="¥" suffix="RMB"/>
      </div>
    </div>
  );
};

export default InputDemo5;