import React from 'react';
import {Input, InputNumber} from '@/index';

const InputDemo4: React.FunctionComponent = () => {
  return (
    <div className="input-demo-4">
      <Input.Number defaultValue={0} min={0} max={5}/>
      <InputNumber defaultValue={3} precision={2}/>
    </div>
  );
};

export default InputDemo4;