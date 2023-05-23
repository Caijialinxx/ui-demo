import React, {ReactNode} from 'react';
import './index.scss';
import InputNumber, {InputNumberProps} from './InputNumber';
import TextArea, {TextAreaProps} from './TextArea';
import {scopeClassMaker} from '@helpers/index';

const setCN = scopeClassMaker('cui-input');

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: 'large' | 'default' | 'small';
  width?: string | number;
  prefix?: ReactNode;
  suffix?: ReactNode;
  [K: string]: any;
}

interface InputApis {
  Number: React.FunctionComponent<InputNumberProps>;
  TextArea: React.FunctionComponent<TextAreaProps>;
}

type Input = React.FunctionComponent<InputProps> & InputApis

const Input: Input = ({className, width, size, prefix, suffix, type, ...restProps}) => {
  return prefix || suffix ?
    (
      <span style={{width}} className={setCN('affix-wrapper', className)}>
        {prefix && <span className={setCN('prefix')}>{prefix}</span>}
        <input
          type={type}
          className={setCN('', size !== 'default' && `cui-input-${size}`)}
          {...restProps}
        />
        {suffix && <span className={setCN('suffix')}>{suffix}</span>}
      </span>) :
    (
      <input
        type={type}
        style={{width}}
        className={setCN('', className, size !== 'default' && `cui-input-${size}`)}
        {...restProps}
      />);
};

Input.defaultProps = {
  type: 'text',
  size: 'default'
};

Input.TextArea = TextArea;

Input.Number = InputNumber;

export default Input;

export {InputNumber, TextArea};