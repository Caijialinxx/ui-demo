import React from 'react';
import {Button} from '../../index';

const ButtonDemo6: React.FunctionComponent = () => {
  return (
    <div className="button-demo-6">
      <ul>
        <li>
          <Button theme="primary" disabled>Primary</Button>
          <Button theme="primary" mode="plain" disabled>Plain</Button>
        </li>
        <li>
          <Button theme="success" disabled>Success</Button>
          <Button theme="success" mode="plain" disabled>Plain</Button>
        </li>
        <li>
          <Button theme="info" disabled>Info</Button>
          <Button theme="info" mode="plain" disabled>Plain</Button>
        </li>
        <li>
          <Button theme="warning" disabled>Warning</Button>
          <Button theme="warning" mode="plain" disabled>Plain</Button>
        </li>
        <li>
          <Button theme="danger" disabled>Danger</Button>
          <Button theme="danger" mode="plain" disabled>Plain</Button>
        </li>
        <li>
          <Button disabled>Default</Button>
          <Button theme="primary" mode="text" disabled>Text</Button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonDemo6;