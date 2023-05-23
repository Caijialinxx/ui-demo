import React from 'react';
import {Checkbox} from '@/index';

const CheckboxDemo4: React.FunctionComponent = () => {
  const plainOptions = ['苹果', '香蕉', '橘子'];
  const options = [
    {label: '苹果', value: 'apple'},
    {label: '香蕉', value: 'banana'},
    {label: '橘子', value: 'orange'},
  ];
  const optionsWithDisabled = [
    {label: '苹果', value: 'apple'},
    {label: '香蕉', value: 'banana', disabled: true},
    {label: '橘子', value: 'orange'},
  ];
  const handleChange = (checkedValue: string[]) => {
    console.log(checkedValue);
  };
  return (
    <div className="checkbox-demo-checkbox-group">
      <Checkbox.Group
        defaultValue={['苹果']}
        options={plainOptions}
        onChange={handleChange}
      />
      <br/>
      <Checkbox.Group
        disabled
        defaultValue={['banana', 'orange']}
        options={options}
        onChange={handleChange}
      />
      <br/>
      <Checkbox.Group
        options={optionsWithDisabled}
        onChange={handleChange}
      />
    </div>
  );
};

export default CheckboxDemo4;