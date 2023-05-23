import React, {ChangeEventHandler} from 'react';
import {Radio} from '@/index';

const RadioDemo1: React.FunctionComponent = () => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('checked = ', e.target.value);
  };
  return (
    <div>
      <Radio.Group
        options={['A', 'B', 'C', 'D']}
        defaultValue="C"
        onChange={handleChange}
      />
    </div>
  );
};

export default RadioDemo1;