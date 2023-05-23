import React, {useState} from 'react';
import {Button, InputNumber} from '@/index';

const InputNumberDemo2: React.FunctionComponent = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  return (
    <div className="input-number-demo-2">
      <InputNumber defaultValue={9} disabled={disabled}/>
      <InputNumber disabled={disabled} controls="horizontal"/>
      <div style={{marginTop: '8px'}}>
        <Button onClick={() => {setDisabled(!disabled);}} theme="primary">Toggle Disabled</Button>
      </div>
    </div>
  );
};

export default InputNumberDemo2;