import React, {ReactNode, useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import ReactMarkdown from 'react-markdown';

export interface DemoProps {
  demo: ReactNode;
  title: string;
  intro: string;
  code: string;
}

const createMarkdown = (source: string, className?: string): ReactNode =>
  <ReactMarkdown
    source={source}
    className={['rmd', className].filter(Boolean).join(' ')}
  />;

const Demo: React.FunctionComponent<DemoProps> = (props) => {
  const [showCode, setShowCode] = useState(false);
  const code = (
    <Highlight {...defaultProps} theme={theme} code={props.code} language="typescript">
      {({className, tokens, getLineProps, getTokenProps}) => (
        <pre className={className}>
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
    <div className="demo-box">
      <div className="demo-demo">
        {props.demo}
      </div>
      <div className="demo-intro">
        <h4>{props.title}</h4>
        {createMarkdown(props.intro)}
      </div>
      <div className="demo-buttons">
        {/* TODO: 更换按钮「copy」和「code」 */}
        <button onClick={() => setShowCode(!showCode)}>Code</button>
      </div>
      <div className="demo-code">
        {showCode && code}
      </div>
    </div>
  );
};

const createDemoColumns = (demos: DemoProps[]): ReactNode => {
  const col1: ReactNode[] = [], col2: ReactNode[] = [];
  demos.forEach((demo, index) => {
    index % 2 === 0 ?
      col1.push(<Demo key={index} {...demo}/>) :
      col2.push(<Demo key={index} {...demo}/>);
  });
  return (
    <div className="demos-container">
      <div className="demos-col">{col1}</div>
      <div className="demos-col">{col2}</div>
    </div>);
};

export interface AttrProps {
  name: string;
  intro: string;
  type: string;
  default?: string;
}

const createAttrTable = (attributes: AttrProps[]): ReactNode => {
  const createAttrRows = (attrs: AttrProps[]): ReactNode[] => attrs.map((attr, index) =>
    <tr key={index}>{createAttrCols(attr)}</tr>);
  const createAttrCols = (attr: AttrProps): ReactNode[] => Object.values(attr).map((val, index) =>
    <td key={index}>{createMarkdown(val)}</td>);
  return (
    <table className="attrs-table">
      <thead>
      <tr>
        <th>属性名</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      {createAttrRows(attributes)}
      </tbody>
    </table>
  );
};

const theme /*: PrismTheme */ = {
  plain: {
    color: '#333333',
    backgroundColor: '#1E1E1E'
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: 'rgb(0, 0, 128)'
      }
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(106, 153, 85)'
      }
    },
    {
      types: ['builtin', 'tag', 'changed', 'keyword'],
      style: {
        color: 'rgb(86, 156, 214)'
      }
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: 'rgb(181, 206, 168)'
      }
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(100, 102, 149)'
      }
    },
    {
      types: ['attr-name', 'variable'],
      style: {
        color: 'rgb(156, 220, 254)'
      }
    },
    {
      types: ['deleted', 'string'],
      style: {
        color: 'rgb(206, 145, 120)'
      }
    },
    {
      types: ['selector'],
      style: {
        color: 'rgb(215, 186, 125)'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: '#a9a9a9'
      }
    },
    {
      types: ['operator'],
      style: {
        color: '#b44d38'
      }
    }
  ]
};

export {createMarkdown, createDemoColumns, createAttrTable};