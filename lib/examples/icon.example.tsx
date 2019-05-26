import React from 'react';
import Demo from './demo';
import IconDemo1 from './icon/icon.demo.1';
import {Icon} from '../index';

const IconExample: React.FunctionComponent = () => {
  const demo1 = require('!!raw-loader!./icon/icon.demo.1.tsx').default;
  return (
    <div>
      <Icon name="emoji-happy"/>
      <Icon name="emoji-cool"/>
      <Icon name="emoji-angry"/>
      <Icon name="emoji-sad"/>
      <Icon name="emoji-shocked"/>
      <div className="demos-container">
        <Demo code={demo1} component={<IconDemo1/>}/>
      </div>
    </div>
  );
};

export default IconExample;