import React from 'react';
import {Icon} from '@/index';

const IconDemo2: React.FunctionComponent = () => {
  return (
    <div>
      <Icon animationType="spin" name="setting"/>
      <Icon animationType="shake" animationTrigger="hover" name="bell"/>
      <Icon animationType="shake-horizontal" animationTrigger="click" name="bin"/>
      <Icon animationType="shake-vertical" animationTrigger="click" name="thumb-down"/>
    </div>
  );
};

export default IconDemo2;