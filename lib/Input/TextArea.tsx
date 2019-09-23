import React, {useEffect, useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-input');

type AutoSizeProps = {
  minRows?: number;
  maxRows?: number;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autosize?: boolean | AutoSizeProps;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({autosize, style, onChange, ...restProps}) => {
  const [_style, setStyle] = useState<{ [k: string]: string }>({});
  const myRef = React.createRef<HTMLTextAreaElement>();
  const [ghostTextArea] = useState(document.createElement('textarea'));
  useEffect(() => {
    if (autosize) {
      const myTextArea = myRef.current;
      const myTAStyle = window.getComputedStyle(myTextArea!, null);
      const lineHeight = parseFloat(myTAStyle.lineHeight || ''),
        paddingBorderHeight = parseFloat(myTAStyle.paddingTop || '')
          + parseFloat(myTAStyle.paddingBottom || '')
          + parseFloat(myTAStyle.borderTop || '')
          + parseFloat(myTAStyle.borderBottom || '');
      if (typeof autosize === 'boolean') {
        setStyle({height: lineHeight + paddingBorderHeight + 'px'});
      } else {
        setStyle({
          minHeight: (autosize.minRows || 1) * lineHeight + paddingBorderHeight + 'px',
          maxHeight: (autosize.maxRows || Infinity) * lineHeight + paddingBorderHeight + 'px'
        });
      }
      Object.assign(ghostTextArea.style, {
        width: myTAStyle.width,
        height: '0',
        visibility: 'hidden',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: '-1000',
        top: '-1000px',
        right: '-1000px',
        fontSize: myTAStyle.fontSize,
        fontFamily: myTAStyle.fontFamily,
        fontWeight: myTAStyle.fontWeight,
        textIndent: myTAStyle.textIndent,
        letterSpacing: myTAStyle.letterSpacing,
        lineHeight: myTAStyle.lineHeight,
        padding: myTAStyle.padding,
        border: myTAStyle.border,
        boxSizing: myTAStyle.boxSizing,
      });
      document.body.appendChild(ghostTextArea);
    }
  }, []);
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (autosize) {   // autosize === true || autosize: {minRows,maxRows}
      ghostTextArea.value = e.target.value;
      const newHeight = ghostTextArea.scrollHeight + 2;
      if (autosize === true || newHeight <= parseFloat(_style.maxHeight || '') && newHeight >= parseFloat(_style.minHeight || '')) {
        setStyle(Object.assign({}, _style, {height: newHeight + 'px'}));
      }
    }
    onChange && onChange(e);
  };
  return (
    <textarea
      ref={myRef}
      style={Object.assign(style || {}, _style)}
      className={setCN('')}
      onChange={handleChange}
      {...restProps}
    />
  );
};

TextArea.defaultProps = {
  autosize: false,
};

export default TextArea;