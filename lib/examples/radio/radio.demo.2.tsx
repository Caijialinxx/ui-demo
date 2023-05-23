import React from 'react';
import {Radio} from '@/index';

const RadioDemo2: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <Radio defaultChecked disabled>Radio</Radio>
      </div>
      <Radio.Group
        options={[
          {label: 'Radio 1', value: 'Radio 1', disabled: true},
          {label: 'Radio 2', value: 'Radio 2'}
        ]}
        defaultValue="Radio 1"
      />
      <Radio.Group disabled options={['Radio 1', 'Radio 2']}/>
    </div>
  );
};

export default RadioDemo2;