import React, {ReactNode, useState} from 'react';
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


Input.TextArea = () => {
  return (
    <textarea/>
  );
};

interface InputNumberProps extends Omit<InputProps, 'defaultValue' | 'onChange'> {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
  controls?: 'vertical' | 'horizontal' | null;
  onChange?: (value: number | string) => void;
}

const InputNumber: React.FunctionComponent<InputNumberProps> = ({className, width, size, controls, suffix, prefix, precision, step, min, max, onChange, defaultValue, disabled, ...restProps}) => {
  const _defaultVal = findNumber(defaultValue);
  const [_value, setValue] = useState<string>(precision === undefined ? _defaultVal : fixPrecision(_defaultVal, precision));
  const stepPrecision: number = (String(step!).split('.')[1] || '').length;
  // 在没有设置precision的情况下，初始precision默认为step的精度，否则以precision为准
  const [_precision, setPrecision] = useState<number>(precision === undefined ? stepPrecision : precision);
  const [disabledBtn, setDisabledBtn] = useState<string>(defaultValue === min ? 'minus' : defaultValue === max ? 'add' : '');
  const calc = (isAdd: boolean) => {
    const multiple = Math.pow(10, stepPrecision),
      num1: number = Number((_value || '0') + 'e' + stepPrecision),   // 不可以直接乘以倍数，小数的运算容易出现二进制的坑
      num2: number = Number(step! + 'e' + stepPrecision),
      result: number = isAdd ? (num1 + num2) / multiple : (num1 - num2) / multiple;
    setValue(fixPrecision(checkNumber(result, min!, max!), _precision));
    onChange && onChange(result);
    if (result >= max!) {
      setDisabledBtn('add');
    } else if (result <= min!) {
      setDisabledBtn('minus');
    } else {
      setDisabledBtn('');
    }
  };
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const val: string = findNumber(e.target.value), num: number = Number(val);
    if (precision === undefined) {
      // 若precision未设置，当用户更改inputValue时，则精度为step和inputValue间的最大精度
      setPrecision(Math.max((val.split('.')[1] || '').length, stepPrecision));
    }
    setValue(val);
    onChange && onChange(val === String(num) ? num : val);
  };
  return (
    <div className={setCN(
      'number',
      className,
      size !== 'default' && `cui-input-number-${size}`,
      disabled && 'cui-input-number-disabled',
      !!controls && `cui-input-number-${controls}`
    )}>
      {controls === 'horizontal' && [
        (<span key="increase" onClick={() => !disabled && calc(true)}
               className={setCN('number__increase', disabledBtn === 'add' && 'disabled')}>
          <Icon name="add"/>
        </span>),
        (<span key="decrease" onClick={() => !disabled && calc(false)}
               className={setCN('number__decrease', disabledBtn === 'minus' && 'disabled')}>
          <Icon name="minus"/>
        </span>)
      ]}
      {controls === 'vertical' && !disabled && [
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
        onChange={onInputChange}
        onBlur={() => setValue(fixPrecision(checkNumber(_value, min!, max!), _precision))}
        step={step}
        disabled={disabled}
        {...restProps}
      />
    </div>);
};

InputNumber.defaultProps = {
  controls: 'vertical',
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