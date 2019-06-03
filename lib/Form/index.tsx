import React, {useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';
import {Button} from '../index';

const setCN = scopeClassMaker('cui-form');

export interface FormValues {
  [key: string]: string | undefined | boolean
}

interface FormProps {
  data: FormValues;
  field: Array<{
    key: string,
    label?: string | undefined,
    component: React.ReactElement,
    rules?: Array<{ [key: string]: string | boolean | RegExp | Function | undefined }>
  }>;
  onChange?: (e: FormValues) => void;
  onSubmit: (e: FormValues) => void;
}

const Form: React.FunctionComponent<FormProps> = (props) => {
  const [formData, setFormData] = useState(props.data);
  const onChange = (key: string, e: React.ChangeEvent<HTMLFormElement>) => {
    const newData = {...formData, [key]: e.target.value};
    setFormData(newData);
    props.onChange && props.onChange(newData);
  };
  return (
    <form className={setCN('')}>
      {props.field.map(f => {
        const isRequired = !!(f.rules && f.rules.find(rule => rule.require === true));
        return !!f.component && (
          <div key={f.key} className={setCN('item')}>
            <span className={setCN('item-label', isRequired && setCN('item-required'))}>{f.label || f.key}</span>
            <div className={setCN('item-control-wrapper')}>
              <div className={setCN('item-control')}>
                {React.cloneElement(f.component, {onChange: onChange.bind(null, f.key)})}
              </div>
              <span className={setCN('item-error')}>{}</span>
            </div>
          </div>
        );
      })}
      <Button onClick={props.onSubmit.bind(null, formData)} className={setCN('button')}>提交</Button>
    </form>
  );
};

export default Form;