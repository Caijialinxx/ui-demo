import React, {ChangeEventHandler, FunctionComponent, ReactNode, useEffect, useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '@helpers/index';

const setCN = scopeClassMaker('cui-radio');

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

type Radio = FunctionComponent<RadioProps> & { Group: FunctionComponent<RadioGroupProps> }

interface RadioGroupContext {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  disabled?: boolean;
  name?: string;
}

const GroupContext = React.createContext<RadioGroupContext>({});

const Radio: Radio = ({className, checked, defaultChecked, children, style, ...restProps}) => {
  const groupContext = React.useContext(GroupContext);
  const [_checked, setChecked] = useState<boolean>(defaultChecked!);
  const [radioProps, setRadioProps] = useState<RadioProps>({...restProps});
  useEffect(() => {
    if (Object.keys(groupContext).length > 0) {
      const rp = Object.assign({}, radioProps);
      rp.name = groupContext.name;
      rp.disabled = groupContext.disabled || radioProps.disabled;
      rp.value = radioProps.value ?? children?.toString();
      setRadioProps(rp);
      setChecked(rp.value === groupContext.value);
    }
  }, [groupContext]);
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
          {...radioProps}
          type="radio"
          className={setCN('input')}
          onChange={handleChange}
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
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  children?: ReactNode;
}

interface RadioGroupItemProps {
  label?: string;
  value: string;
  disabled?: boolean;
}

Radio.Group = ({options, name, defaultValue, disabled, onChange, value, children, className, ...restProps}) => {
  const [_value, setValue] = useState<string | undefined>(defaultValue ?? value);
  const handleItemChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };
  return (
    <div className={setCN('group', className)} {...restProps}>
      <GroupContext.Provider value={{
        onChange: handleItemChange, name, disabled, value: _value
      }}>
        {
          children ||
          (options as [])?.map((item: string | RadioGroupItemProps) => {
            const _item: RadioGroupItemProps = typeof item === 'string' ? {label: item, value: item} : item;
            const {label: itemLabel, value: itemValue, disabled: itemDisabled} = _item;
            return (
              <Radio
                key={itemValue}
                disabled={itemDisabled}
                value={itemValue}
              >
                {itemLabel || itemValue}
              </Radio>);
          })
        }
      </GroupContext.Provider>
    </div>
  );
};

Radio.Group.defaultProps = {
  disabled: false,
};

export default Radio;