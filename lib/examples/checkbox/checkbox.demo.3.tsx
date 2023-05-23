import React, {useState} from 'react';
import {Button, Checkbox} from '@/index';

const CheckboxDemo3: React.FunctionComponent = () => {
  const [checked, setChecked] = useState();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked)
  };
  return (
    <div>
      <Checkbox checked={checked} onChange={handleChange}>Checkbox</Checkbox>
      <Button onClick={() => setChecked(!checked)}>set {checked ? 'unchecked' : 'checked'}</Button>
    </div>
  );
};

export default CheckboxDemo3;