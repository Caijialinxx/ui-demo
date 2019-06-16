import React, {useState} from 'react';
import {Form, FormValues, FormErrors} from '../index';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValues>({
    username: undefined,
    age: undefined,
    city: undefined,
    gender: undefined,
    email: undefined,
    password: undefined,
  });
  const field = [
    {
      key: 'username', label: '用户名',
      component: (<input type="text"/>),
    },
    {
      key: 'age', label: '年龄',
      component: (<input type="number"/>),
    },
    {
      key: 'city', label: '城市',
      component: (
        <select name="city">
          <option value="shenzhen">深圳</option>
          <option value="guangzhou">广州</option>
          <option value="beijing">北京</option>
        </select>
      )
    },
    {
      key: 'email', label: '电子邮箱',
      component: (<input type="text"/>),
    },
    {
      key: 'password', label: '密码',
      component: (<input type="password"/>),
    }
  ];
  const formRules = {
    username: [{required: true, message: '请输入用户名！'}],
    email: [{required: true, message: '请输入邮箱！'}, {pattern: /^\w+@\w+(\.\w+)+$/, message: '请输入正确的电子邮箱！'}],
    password: [{required: true, message: '请输入密码！'}, {minLength: 8}]
  };
  const onSubmit = (errors: FormErrors, data: FormValues) => {
    console.log(errors, data);
  };
  return (
    <Form data={formData} field={field} rules={formRules} onChange={(data) => setFormData(data)}
          onSubmit={onSubmit}/>
  );
};

export default FormExample;