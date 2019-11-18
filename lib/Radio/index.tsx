import React, {ChangeEventHandler, FunctionComponent, useEffect, useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-radio');

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

type Radio = FunctionComponent<RadioProps> & { Group: FunctionComponent<RadioGroupProps> }

const Radio: Radio = ({className, checked, defaultChecked, disabled, children, onChange, ...restProps}) => {
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
        className)}
    >
      <span className={setCN('')}>
        <input
          type="radio"
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

Radio.defaultProps = {
  disabled: false,
  defaultChecked: false,
};

interface RadioGroupProps {
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  options: Array<string | RadioGroupItemProps>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

interface RadioGroupItemProps {
  label?: string;
  value: string;
  disabled?: boolean;
}

Radio.Group = ({options, name, defaultValue, disabled, onChange, value, className, ...restProps}) => {
  const [_value, setValue] = useState<string | undefined>(defaultValue);
  const handleItemChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };
  return (
    <div className={setCN('group', className)} {...restProps}>
      {
        options.map((item: string | RadioGroupItemProps) => {
          const _item: RadioGroupItemProps = typeof item === 'string' ? {label: item, value: item} : item;
          const {label: itemLabel, value: itemValue, disabled: itemDisabled} = _item;
          return (
            <Radio
              key={itemValue}
              name={name}
              disabled={disabled || itemDisabled}
              checked={_value === itemValue}
              value={itemValue}
              onChange={handleItemChange}
              className={setCN('group-item')}
            >
              {itemLabel || itemValue}
            </Radio>);
        })
      }
    </div>
  );
};

Radio.Group.defaultProps = {
  disabled: false,
};

export default Radio;