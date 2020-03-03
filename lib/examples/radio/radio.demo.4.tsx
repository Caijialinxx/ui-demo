import React, {ChangeEventHandler, useState} from 'react';
import {Input, Radio} from '../../index';

const RadioDemo4: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>('Apple');
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  return (
    <Radio.Group name="favorite" onChange={handleChange} value={value}>
      <Radio style={radioStyle}>Apple</Radio>
      <Radio style={radioStyle}>Banana</Radio>
      <Radio style={radioStyle} value="Other">
        Other...
        {value === "Other" && <Input size="small" style={{width: '100px', marginLeft: '10px'}}/>}
      </Radio>
    </Radio.Group>
  );
};

export default RadioDemo4;