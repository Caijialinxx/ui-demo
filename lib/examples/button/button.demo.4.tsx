import React from 'react';
import {Button} from '@/index';

const ButtonDemo3: React.FunctionComponent = () => {
  return (
    <div className="button-demo-4">
      <ul>
        <li>
          <Button size="large">Large</Button>
          <Button>Default</Button>
          <Button size="small">Small</Button>
        </li>
        <li>
          <Button size="large" shape="round">Large</Button>
          <Button shape="round">Default</Button>
          <Button size="small" shape="round">Small</Button>
        </li>
        <li>
          <Button size="large" mode="text">Large</Button>
          <Button mode="text">Default</Button>
          <Button size="small" mode="text">Small</Button>
        </li>
        <li>
          <Button size="large" icon="upload"/>
          <Button icon="upload"/>
          <Button size="small" icon="upload"/>
        </li>
        <li>
          <Button size="large" shape="circle" icon="upload"/>
          <Button shape="circle" icon="upload"/>
          <Button size="small" shape="circle" icon="upload"/>
        </li>
        <li>
          <Button size="large" shape="round" icon="upload"/>
          <Button shape="round" icon="upload"/>
          <Button size="small" shape="round" icon="upload"/>
        </li>
      </ul>
    </div>
  );
};

export default ButtonDemo3;