import React, {useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-input');

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FunctionComponent<InputProps> = ({className, type, ...restProps}) => {
  return (
    <span className={setCN('wrapper')}>
      <input type={type} className={setCN('', className)} {...restProps}/>
    </span>);
};

Input.defaultProps = {
  type: 'text'
};

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
}

const InputNumber: React.FunctionComponent<InputNumberProps> = ({className, precision, step, min, max, onChange, defaultValue, ...restProps}) => {
  const [_value, setValue] = useState<string>(findNumber(defaultValue));
  const [_step] = useState<number>(step!);
  const [_multiple] = useState<number>(Math.pow(10, precision! + 1));
  const calc = (isAdd: boolean) => {
    let result = isAdd ?
      (Math.trunc(Number(_value) * _multiple) + (_step * _multiple)) / _multiple :
      (Math.trunc(Number(_value) * _multiple) - (_step * _multiple)) / _multiple;    // 为了避免js的浮点数bug，这里将数字都乘精度倍数，计算出结构后再除以精度倍数
    setValue(fixPrecision(checkNumber(result, min!, max!), precision!));
  };
  return (
    <div className={setCN('number', className)}>
      <span onClick={() => calc(false)} className={setCN('number__decrease')}>-</span>
      <span onClick={() => calc(true)} className={setCN('number__increase')}>+</span>
      <input type="text" className={setCN('number__input')} value={_value || ''}
        // TODO: props.onChange & props.onBlur
             onChange={(e) => setValue(findNumber(e.target.value))}
             onBlur={() => setValue(fixPrecision(checkNumber(_value, min!, max!), precision!))}
             step={step} {...restProps}/>
    </div>);
};

InputNumber.defaultProps = {
  step: 1,
  precision: 0,
  min: -Infinity,
  max: Infinity
};

const findNumber = (value: any) => String(value).match(/(\-?\d*\.?\d*)|(\d*)/g)!.find(Boolean) || '';
const fixPrecision = (value: string, precision: number) => {
  let [integer, decimal] = value.split('.');
  if (!!integer) {
    if (precision > 0) {
      let length = !!decimal ? precision - decimal.length : precision;
      if (!decimal) return integer + '.' + Array.from(Array(length)).map(() => '0').join(''); // 当没有小数时，直接补全n个0
      return value + Array.from(Array(length)).map(() => '0').join('');
    }
    return integer;
  }
  return value;
};
const checkNumber = (value: string | number, min: number, max: number): string => {
  if (Number(value) < min) {
    return String(min);
  } else if (Number(value) > max) {
    return String(max);
  } else {
    return String(value);
  }
};

export default Input;

export {InputNumber};