import React, {useState} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';
import {Button} from '../index';

const setCN = scopeClassMaker('cui-form');

export interface FormValues {
  [key: string]: string | undefined | boolean
}

interface FormRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: Function;
  message?: string;
}

interface FormRules {
  [key: string]: Array<FormRule>
}

export interface FormErrors {
  [key: string]: string[] | null
}

const Validate = (data: FormValues, rules: FormRules, callback?: Function): FormErrors => {
  const errors: FormErrors | null = {};
  for (const itemKey in rules) {
    // 遍历每个字段，获得该字段的数据、所有规则
    const itemValue = data[itemKey];
    const itemErrors: string[] = [];  // 存储该字段的所有错误
    rules[itemKey].map(r => {
      // 遍历该字段的每个规则
      if (r.required && !itemValue) {
        itemErrors.push(r.message || '不能为空');
      }
      if (!!r.minLength && r.minLength > 0 && (!itemValue || (itemValue as string).length < r.minLength)) {
        itemErrors.push(r.message || '字符长度太短');
      } else if (!!r.maxLength && r.maxLength > (r.minLength as number) && (!itemValue || (itemValue as string).length > r.maxLength)) {
        itemErrors.push(r.message || '字符长度太长');
      }
      if (r.pattern instanceof RegExp && !r.pattern.test(itemValue as string)) {
        // .test()会改变lastIndex的属性，连续执行会从lastIndex处开始匹配，可以使用string.match()来替代判断
        // (itemValue as string).match(r.pattern) === null
        itemErrors.push(r.message || '不合法字符');
        r.pattern.lastIndex = 0;    // 但也可以将其lastIndex直接置为0
      }
      if (itemErrors.length > 0) {
        errors[itemKey] = itemErrors;
      }
    });
  }
  callback && callback(errors);
  return errors;
};

interface FormProps {
  data: FormValues;
  field: Array<{
    key: string,
    label?: string | undefined,
    component: React.ReactElement,
  }>;
  rules?: FormRules;
  onChange?: (data: FormValues) => void;
  onSubmit?: (errors: FormErrors | null, data: FormValues) => void;
}

const Form: React.FunctionComponent<FormProps> = (props) => {
  const [formData, setFormData] = useState(props.data);
  const onChange = (key: string, e: React.ChangeEvent<HTMLFormElement>) => {
    const newData = {...formData, [key]: e.target.value};
    setFormData(newData);
    props.onChange && props.onChange(newData);
  };
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (!!props.rules) {
      Validate(formData, props.rules, (errors: FormErrors) => {
        setFormErrors(errors);
        props.onSubmit && props.onSubmit(Object.keys(errors).length ? errors : null, formData);
      });
    } else {
      props.onSubmit && props.onSubmit(null, formData);
    }
  };
  return (
    <form className={setCN('')} onSubmit={onSubmit}>
      {props.field.map(f => {
        const isRequired = !!props.rules && !!props.rules[f.key] && !!props.rules[f.key].find(r => r.required === true);
        return !!f.component && (
          <div key={f.key} className={setCN('item')}>
            <span className={setCN('item-label', isRequired && setCN('item-required'))}>{f.label || f.key}</span>
            <div className={setCN('item-control-wrapper')}>
              <div className={setCN('item-control', !!formErrors[f.key] && setCN('item-wrong'))}>
                {React.cloneElement(f.component, {onChange: onChange.bind(null, f.key)})}
              </div>
              {formErrors[f.key] && (<span className={setCN('item-error')}>{formErrors[f.key]![0]}</span>)}
            </div>
          </div>
        );
      })}
      <Button type="submit" className={setCN('button')}>提交</Button>
    </form>
  );
};

export default Form;