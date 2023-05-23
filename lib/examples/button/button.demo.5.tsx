import React, {useState} from 'react';
import {Button} from '@/index';

const ButtonDemo5: React.FunctionComponent = () => {
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  return (
    <div className="button-demo-5">
      <ul>
        <li>
          <Button loading={loading1}
                  onClick={() => setLoading1(true)}>
            Click Me
          </Button>
          <Button icon="upload"
                  loading={loading2}
                  onClick={() => setLoading2(true)}>
            Upload
          </Button>
        </li>
        <li>
          <Button theme="primary" shape="round" loading/>
          <Button theme="success" shape="circle" loading/>
          <Button theme="info" shape="circle" loading/>
          <Button theme="warning" shape="circle" loading/>
          <Button theme="danger" shape="circle" loading/>
        </li>
      </ul>
    </div>
  );
};

export default ButtonDemo5;