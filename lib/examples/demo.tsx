import React, {ReactNode, useState} from 'react';

interface DemoProps {
  code: string;
  component: ReactNode;
}

const Demo: React.FunctionComponent<DemoProps> = (props) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="demo-wrapper">
      <div className="demo-box">
        {props.component}
        <button onClick={() => setShowCode(!showCode)}>Code</button>
        {showCode && (<pre>{props.code}</pre>)}
      </div>
    </div>);
};

export default Demo;