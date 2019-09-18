import React, {ReactNode, useMemo, useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';
import {Icon} from '../index';

const setCN = scopeClassMaker('cui-input');

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: 'large' | 'default' | 'small';
  width?: string | number;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

interface InputApis {
  Number: React.FunctionComponent<InputNumberProps>;
  TextArea: React.FunctionComponent;
}

type Input = React.FunctionComponent<InputProps> & InputApis

const Input: Input = ({className, width, size, prefix, suffix, type, ...restProps}) => {
  // TODO: prefix & suffix
  return (
    <input
      type={type}
      style={{width}}
      className={setCN('', className, size !== 'default' && `cui-input-${size}`)}
      {...restProps}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  size: 'default'
};


Input.TextArea = () => {
  return (
    <textarea/>
  );
};

interface InputNumberProps extends Omit<InputProps, 'defaultValue'> {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
  controllerPosition?: 'vertical' | 'horizontal';
}

const InputNumber: React.FunctionComponent<InputNumberProps> = ({className, width, size, controllerPosition, suffix, prefix, precision, step, min, max, onChange, defaultValue, disabled, ...restProps}) => {
  const _defaultVal = findNumber(defaultValue);
  const [_value, setValue] = useState<string>(precision === undefined ? _defaultVal : fixPrecision(_defaultVal, precision));
  const setPrecision = (inputVal: string) => (inputVal.split('.')[1] || '').length;
  // 在precision为设置的情况下，精度默认为用户输入_value的小数位。并且倍数_multiple也要随_precision改变。
  const _precision = precision === undefined ? useMemo<number>(() => setPrecision(_value), [_value]) : precision;
  const _multiple = useMemo<number>(() => Math.pow(10, _precision + 1), [_precision]);
  const [disabledBtn, setDisabledBtn] = useState<string>(defaultValue === min ? 'minus' : defaultValue === max ? 'add' : '');
  const calc = (isAdd: boolean) => {
    const result: number = isAdd ?
      (Math.trunc(Number(_value) * _multiple) + (step! * _multiple)) / _multiple :
      (Math.trunc(Number(_value) * _multiple) - (step! * _multiple)) / _multiple;    // 为了避免js的浮点数bug，这里将数字都乘精度倍数，计算出结构后再除以精度倍数
    setValue(fixPrecision(checkNumber(result, min!, max!), _precision));
    if (result > max!) {
      setDisabledBtn('add');
    } else if (result < min!) {
      setDisabledBtn('minus');
    } else {
      setDisabledBtn('');
    }
  };
  return (
    <div className={setCN(
      'number',
      className,
      size !== 'default' && `cui-input-number-${size}`,
      disabled && 'cui-input-number-disabled',
      controllerPosition && `cui-input-number-${controllerPosition}`
    )}>
      {controllerPosition === 'horizontal' && [
        (<span key="increase" onClick={() => !disabled && calc(true)}
               className={setCN('number__increase', disabledBtn === 'add' && 'disabled')}>
          <Icon name="add"/>
        </span>),
        (<span key="decrease" onClick={() => !disabled && calc(false)}
               className={setCN('number__decrease', disabledBtn === 'minus' && 'disabled')}>
          <Icon name="minus"/>
        </span>)
      ]}
      {controllerPosition === 'vertical' && !disabled && [
        (<span key="increase" onClick={() => calc(true)}
               className={setCN('number__increase', disabledBtn === 'add' && 'disabled')}>
          <Icon name="up"/>
        </span>),
        (<span key="decrease" onClick={() => calc(false)}
               className={setCN('number__decrease', disabledBtn === 'minus' && 'disabled')}>
          <Icon name="down"/>
        </span>)
      ]}
      <input
        style={{width}}
        className={setCN('number__input')}
        value={_value || ''}
        onChange={(e) => setValue(findNumber(e.target.value))}
        onBlur={() => setValue(fixPrecision(checkNumber(_value, min!, max!), _precision))}
        step={step}
        disabled={disabled}
        {...restProps}
      />
    </div>);
};

InputNumber.defaultProps = {
  controllerPosition: 'vertical',
  size: 'default',
  step: 1,
  min: -Infinity,
  max: Infinity
};

const findNumber = (value: any) => (String(value).match(/(\-?\d*\.?\d*)|(\d*)/g)!.find(Boolean) || '');
const fixPrecision = (value: string, precision: number) => {
  const [integer, decimal] = value.split('.');
  if (!!integer) {
    const length = !!decimal ? precision - decimal.length : precision;    // 当小数存在时，计算需调整的位数，否则为精度
    if (length === 0) return value;
    if (!decimal && precision !== 0) {
      // 当没有小数且精度不为0时，直接补全n个0
      return integer + '.' + Array.from(Array(length)).map(() => '0').join('');
    } else if (length > 0) {
      // 当不足数位时，补全剩余当0
      return value + Array.from(Array(length)).map(() => '0').join('');
    } else {
      // 当数位过多或精度为0时，四舍五入
      return String(Math.round(Number(+value + 'e' + precision)) / Math.pow(10, precision));
    }
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

Input.Number = InputNumber;
export default Input;

export {InputNumber};