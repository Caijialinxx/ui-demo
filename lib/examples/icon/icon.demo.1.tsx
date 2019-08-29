import React from 'react';
import {Icon} from '../../index';

const IconDemo1: React.FunctionComponent = () => {
  return (
    <div>
      <Icon fill="#f73a76" name="thumb-up"/>
      <Icon style={{fontSize: '2em'}} name="emoji-cool"/>
    </div>
  );
};

export default IconDemo1;