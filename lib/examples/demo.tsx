import React, {ReactNode, useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import codeTheme from 'prism-react-renderer/themes/vsDark.js';

interface DemoProps {
  code: string;
  component: ReactNode;
}

const Demo: React.FunctionComponent<DemoProps> = (props) => {
  const [showCode, setShowCode] = useState(false);
  const code = (
    <Highlight {...defaultProps} theme={codeTheme} code={props.code} language="typescript">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
      )}
    </Highlight>);
  return (
    <div className="demo-wrapper">
      <div className="demo-box">
        {props.component}
        <button onClick={() => setShowCode(!showCode)}>Code</button>
        {showCode && code}
      </div>
    </div>);
};

export default Demo;