import React from 'react';
import {Button, Icon} from '../../index';

const ButtonDemo2: React.FunctionComponent = () => {
  return (
    <div className="button-demo-2">
      <Button icon="download"/>
      <Button shape="circle" icon="download"/>
      <Button shape="round">下载 <Icon name="download"/></Button>
      <Button shape="circle">D</Button>
    </div>
  );
};

export default ButtonDemo2;