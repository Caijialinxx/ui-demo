import React from 'react';
import {Button} from '../../index';

const ButtonDemo3: React.FunctionComponent = () => {
  return (
    <div className="button-demo-3">
      <ul>
        <li>
          <Button theme="primary">Primary</Button>
          <Button theme="primary" mode="plain">Plain</Button>
          <Button theme="primary" mode="text">Text</Button>
        </li>
        <li>
          <Button theme="success">Success</Button>
          <Button theme="success" mode="plain">Plain</Button>
          <Button theme="success" mode="text">Text</Button>
        </li>
        <li>
          <Button theme="info">Info</Button>
          <Button theme="info" mode="plain">Plain</Button>
          <Button theme="info" mode="text">Text</Button>
        </li>
        <li>
          <Button theme="warning">Warning</Button>
          <Button theme="warning" mode="plain">Plain</Button>
          <Button theme="warning" mode="text">Text</Button>
        </li>
        <li>
          <Button theme="danger">Danger</Button>
          <Button theme="danger" mode="plain">Plain</Button>
          <Button theme="danger" mode="text">Text</Button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonDemo3;