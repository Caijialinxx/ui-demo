import React from 'react';
import {Button} from '@/index';

const ButtonDemo1: React.FunctionComponent = () => {
  return (
    <div className="button-demo-1">
      <ul>
        <li>
          <Button>Default</Button>
          <Button theme="primary">Primary</Button>
          <Button theme="success">Success</Button>
        </li>
        <li>
          <Button theme="info">Info</Button>
          <Button theme="warning">Warning</Button>
          <Button theme="danger">Danger</Button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonDemo1;