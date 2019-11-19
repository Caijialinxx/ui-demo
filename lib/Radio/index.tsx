import React, {ChangeEventHandler, FunctionComponent, ReactNode, useEffect, useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-radio');

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
}

type Radio = FunctionComponent<RadioProps> & { Group: FunctionComponent<RadioGroupProps> }

interface RadioGroupContext {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  disabled?: boolean;
  name?: string;
}

const GroupContext = React.createContext<RadioGroupContext>({});

const Radio: Radio = ({className, checked, defaultChecked, children, style, ...restProps}) => {
  const groupContext = React.useContext(GroupContext);
  const [_checked, setChecked] = useState<boolean>(defaultChecked!);
  const [radioProps, setRadioProps] = useState<RadioProps>({...restProps});
  useEffect(() => {
    if (checked !== undefined) {
      setChecked(checked!);
    }
    if (Object.keys(groupContext).length > 0) {
      const rp = Object.assign({}, radioProps);
      rp.name = groupContext.name;
      rp.disabled = groupContext.disabled;
      rp.value = radioProps.value === undefined ? children!.toString() : radioProps.value;
      setRadioProps(rp);
      setChecked(rp.value === groupContext.value);
    }
  }, [checked, groupContext]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    radioProps.onChange && radioProps.onChange(e);
    groupContext.onChange && groupContext.onChange(e);
  };
  return (
    <label
      className={setCN('wrapper',
        _checked && setCN('checked'),
        radioProps.disabled && setCN('disabled'),
        className)}
      style={style}
    >
      <span className={setCN('')}>
        <input
          type="radio"
          className={setCN('input')}
          onChange={handleChange}
          checked={_checked}
          {...radioProps}
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
  options?: string[] | RadioGroupItemProps[];
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  children?: ReactNode;
}

interface RadioGroupItemProps {
  label?: string;
  value: string | number;
  disabled?: boolean;
}

Radio.Group = ({options, name, defaultValue, disabled, onChange, value, children, className, ...restProps}) => {
  const [_value, setValue] = useState<string | number | undefined>(defaultValue);
  const handleItemChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };
  useEffect(() => {
    if (value !== undefined) {
      setValue(value);
    }
  }, [value]);
  return (
    <div className={setCN('group', className)} {...restProps}>
      {
        children && (
          <GroupContext.Provider value={{
            onChange: handleItemChange, name, disabled, value: _value
          }}>{children}</GroupContext.Provider>
        )
        ||
        options && (options as []).map((item: string | RadioGroupItemProps) => {
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