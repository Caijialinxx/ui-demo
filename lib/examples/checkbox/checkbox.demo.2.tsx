import React from 'react';
import {Checkbox} from '@/index';

const CheckboxDemo2: React.FunctionComponent = () => {
  return (
    <div>
      <Checkbox disabled>Unchecked</Checkbox>
      <Checkbox defaultChecked disabled>Checked</Checkbox>
    </div>
  );
};

export default CheckboxDemo2;