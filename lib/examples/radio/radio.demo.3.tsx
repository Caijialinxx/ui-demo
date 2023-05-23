import React from 'react';
import {Radio} from '@/index';

const RadioDemo3: React.FunctionComponent = () => {
  return (
    <Radio.Group
      name="gender"
      options={['Male', 'Female']}
      defaultValue="Male"
    />
  );
};

export default RadioDemo3;