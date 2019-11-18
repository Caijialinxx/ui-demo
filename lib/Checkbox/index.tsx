import React, {ChangeEventHandler, FunctionComponent, useEffect, useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-checkbox');

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

type Checkbox = FunctionComponent<CheckboxProps> & { Group: FunctionComponent<CheckboxGroupProps> }

const Checkbox: Checkbox = ({className, checked, defaultChecked, size, disabled, indeterminate, children, onChange, ...restProps}) => {
  const [_checked, setChecked] = useState<boolean>(defaultChecked!);
  useEffect(() => {
    if (checked !== undefined) {
      setChecked(checked!);
    }
  }, [checked]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setChecked(e.target.checked);
    onChange && onChange(e);
  };
  return (
    <label
      className={setCN('wrapper',
        _checked && setCN('checked'),
        disabled && setCN('disabled'),
        indeterminate && setCN('indeterminate'),
        className)}
    >
      <span className={setCN('')}>
        <input
          type="checkbox"
          className={setCN('input')}
          onChange={handleChange}
          disabled={disabled}
          checked={_checked}
          {...restProps}
        />
        <span className={setCN('inner')}/>
      </span>
      <span className={setCN('label')}>{children}</span>
    </label>);
};

Checkbox.defaultProps = {
  disabled: false,
  defaultChecked: false,
  indeterminate: false,
};

interface CheckboxGroupProps {
  defaultValue?: string[];
  disabled?: boolean;
  options: Array<string | CheckboxGroupItemProps>;
  value?: string[];
  onChange?: (checkedValue: string[]) => void;
  className?: string;
}

interface CheckboxGroupItemProps {
  label?: string;
  value: string;
  disabled?: boolean;
}

Checkbox.Group = ({options, defaultValue, disabled, onChange, value, className, ...restProps}) => {
  const [_value, setValue] = useState<string[]>(defaultValue!);
  const [flag, setFlag] = useState({
    initDone: false,
    initialValueIsUndefined: false
  });
  useEffect(() => {
    if (!flag.initDone) { // 初始化
      if (value) { setValue(value); }
      setFlag({initDone: true, initialValueIsUndefined: value === undefined});
    } else if (value === undefined && !flag.initialValueIsUndefined) {
      // 如果value初始值不为undefined，而用户将其值设为undefined，则报错提示用户。
      console.error('Property \'value\' in <Checkbox.Group> should not be undefined, it should be an array! ' +
        '\n If you don\'t need property \'value\', just remove it. Otherwise you should set [] instead of undefined.');
    } else if (value !== undefined) {
      setValue(value);
    }
  }, [value, flag]);
  const handleItemChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const {checked, value} = e.target;
    let newValue: string[];
    if (checked) {
      newValue = _value.concat(value);
      setValue(newValue);
    } else {
      newValue = _value.filter(item => item !== value);
      setValue(newValue);
    }
    onChange && onChange(newValue);
  };
  return (
    <div className={setCN('group', className)} {...restProps}>
      {
        options.map((item: string | CheckboxGroupItemProps) => {
          const _item: CheckboxGroupItemProps = typeof item === 'string' ? {label: item, value: item} : item;
          const {label: itemLabel, value: itemValue, disabled: itemDisabled} = _item;
          const checked = _value.includes(itemValue);
          return (
            <Checkbox
              key={itemValue}
              disabled={disabled || itemDisabled}
              checked={checked}
              value={itemValue}
              onChange={handleItemChange}
              className={setCN('group-item')}
            >
              {itemLabel || itemValue}
            </Checkbox>);
        })
      }
    </div>
  );
};

Checkbox.Group.defaultProps = {
  defaultValue: [],
  disabled: false,
};

export default Checkbox;