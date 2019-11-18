import React from 'react';
import {Radio} from '../../index';

const RadioDemo2: React.FunctionComponent = () => {
  return (
    <div>
      <Radio disabled>Radio 1</Radio>
      <Radio defaultChecked disabled>Radio 2</Radio>
    </div>
  );
};

export default RadioDemo2;