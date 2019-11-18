import React, {ChangeEventHandler} from 'react';
import {Radio} from '../../index';

const RadioDemo1: React.FunctionComponent = () => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('checked = ', e.target.value);
  };
  const plainOptions = ['A', 'B', 'C', 'D'];
  const options = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C', disabled: true},
    {label: 'D', value: 'D'}
  ];
  return (
    <div>
      <Radio.Group
        options={plainOptions}
        onChange={handleChange}
      />
      <br/>
      <Radio.Group
        options={options}
        defaultValue="B"
        onChange={handleChange}
      />
    </div>
  );
};

export default RadioDemo1;