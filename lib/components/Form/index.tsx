import React, {ReactElement, ReactNode, ReactNodeArray, useState} from 'react';
import './index.scss';
import {flatten, groupBy, scopeClassMaker} from '@helpers/index';
import {Button, ButtonProps} from '@/index';

const setCN = scopeClassMaker('cui-form');

export interface FormValues {
  [fieldKey: string]: string | undefined | boolean | number
}

interface FormFieldRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: (value: any) => Promise<any>;
  message?: string;
}

interface FormRules {
  [fieldKey: string]: FormFieldRule[]
}

export interface FormErrors {
  [fieldKey: string]: string[]
}

interface FormItem {
  key: string;
  label?: string;
  field: ReactElement;
  extra?: ReactNode | ReactNodeArray;
}

interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onChange' | 'onSubmit'> {
  values: FormValues;
  items?: FormItem[];
  rules?: FormRules;
  labelWidth?: number | string;
  submitButtonProps?: ButtonProps;
  onChange?: (values: FormValues) => void;
  onSubmit?: (errors: FormErrors | null, values: FormValues) => void;
}

const Form: React.FunctionComponent<FormProps> = ({values, labelWidth, rules, items, onChange, onSubmit, submitButtonProps, ...restProps}) => {
  const [formData, setFormData] = useState(values);
  const handleChange = (key: string, fieldComponent: ReactElement, e: React.ChangeEvent<HTMLFormElement>) => {
    let value;
    if (e.target) {
      switch (e.target.type) {
        case 'checkbox':
          value = e.target.checked;
          break;
        default:
          value = e.target.value;
          break;
      }
    } else {
      value = e;      // fix: 当组件onChange被重写，e.target不存在，返回的是value时的情况，如InputNumber、Checkbox.Group等
    }
    const newData = {...formData, [key]: value};
    setFormData(newData);
    fieldComponent.props.onChange ? fieldComponent.props.onChange(e) :
      onChange && onChange(newData);
  };
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null);
  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (!!rules) {
      Validate(formData, rules, (errors: FormErrors | null) => {
        setFormErrors(errors);
        onSubmit && onSubmit(errors, formData);
      });
    } else {
      onSubmit && onSubmit(null, formData);
    }
  };
  const btnProps: ButtonProps = Object.assign({
    type: 'submit',
    theme: 'primary',
    value: 'Confirm',
  }, submitButtonProps);
  return (
    <form className={setCN('')} onSubmit={handleSubmit} {...restProps}>
      {!!items && [
        items.map(f => {
          const fieldKey = f.key;
          const isRequired = !!rules && !!rules[fieldKey] && !!rules[fieldKey].find(r => r.required === true);
          return !!f.field && (
            <div key={fieldKey} className={setCN('item')}>
              {f.label && (
                <span
                  className={setCN('item-label', isRequired && setCN('item-required'))}
                  style={{width: labelWidth}}
                >
                {f.label}
              </span>
              )}
              <div className={setCN('item-control-wrapper')} style={!f.label ? {marginLeft: labelWidth} : undefined}>
                <div
                  className={setCN('item-control', !!f.extra && setCN('item-control-with-extra'), !!formErrors && !!formErrors[fieldKey] && setCN('item-wrong'))}>
                  <span className={setCN('item-field')}>
                    {React.cloneElement(f.field, {onChange: handleChange.bind(null, fieldKey, f.field)})}
                  </span>
                  {f.extra && (
                    <span className={setCN('item-extra')}>{f.extra}</span>
                  )}
                </div>
                {!!formErrors && formErrors[fieldKey] && (
                  <span className={setCN('item-error')}>{formErrors[fieldKey]![0]}</span>)}
              </div>
            </div>
          );
        }), (
          <Button
            key="__btn_submit__"
            {...btnProps}
            style={{marginLeft: labelWidth, ...btnProps.style}}
            className={setCN('button', btnProps.className)}
          >
            {btnProps.value}
          </Button>
        )]
      }
    </form>
  );
};

type InitialError = string | Promise<string>;

const Validate = (values: FormValues, rules: FormRules, callback?: (errors: FormErrors | null) => void) => {
  const errors: { [fieldKey: string]: InitialError[] } = {};
  Object.keys(rules).map(fieldKey => {
    // 遍历每个字段，获得该字段的数据、所有规则
    const fieldValue = values[fieldKey];
    const itemErrors: InitialError[] = [];  // 存储该字段的所有错误
    rules[fieldKey].map(r => {
      // 遍历该字段的每个规则
      if (!!r.validator) {
        itemErrors.push(r.validator(fieldValue));
      }
      if (r.required && !fieldValue) {
        itemErrors.push(r.message || '不能为空');
      }
      if (!!r.minLength && r.minLength > 0 && (!fieldValue || (fieldValue as string).length < r.minLength)) {
        itemErrors.push(r.message || '字符长度太短');
      } else if (!!r.maxLength && r.maxLength > (r.minLength as number) && (!fieldValue || (fieldValue as string).length > r.maxLength)) {
        itemErrors.push(r.message || '字符长度太长');
      }
      if (r.pattern instanceof RegExp && !r.pattern.test(fieldValue as string)) {
        // .test()会改变lastIndex的属性，连续执行会从lastIndex处开始匹配，可以使用string.match()来替代判断
        // (fieldValue as string).match(r.pattern) === null
        itemErrors.push(r.message || '不合法字符');
        r.pattern.lastIndex = 0;    // 但也可以将其lastIndex直接置为0
      }
    });
    if (itemErrors.length > 0) {
      errors[fieldKey] = itemErrors;
    }
  });
  const flattenedErrors = flatten(Object.keys(errors).map(fieldKey => errors[fieldKey].map((err: InitialError) => [fieldKey, err])));
  // 将string和Promise<string>全部转换成已resolved的Promise<string>，使得后续的Promise.all()可以检查所有的异步promise
  const newPromises = flattenedErrors.map(([fieldKey, promiseOrString]) =>
    (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
      .then(() => [fieldKey, undefined], (reason) => [fieldKey, reason]));
  Promise.all(newPromises).then(results => {
    const result = groupBy(results.filter(arr => !!arr[1]), item => item[0]);
    callback && callback(Object.keys(result).length ? result : null);
  });
};

export default Form;