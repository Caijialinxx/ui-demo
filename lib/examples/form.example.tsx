import React, {useState} from 'react';
import {Form, FormValues} from '../index';

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
      rules: [{require: true, errorMessage: '请输入密码！'}]
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
      component: (<input type="email"/>),
      rules: [{require: true, errorMessage: '请输入邮箱！'}, {pattern: /[a-z]/g, errorMessage: '请输入正确的电子邮箱！'}]
    },
    {
      key: 'password', label: '密码',
      component: (<input type="password"/>),
      rules: [{require: true, errorMessage: '请输入密码！'}]
    }
  ];
  const onSubmit = (e: FormValues) => {
    setFormData(e);
    console.log(e)
  };
  return (
    <Form data={formData} field={field} onChange={(data) => setFormData(data)} onSubmit={e => onSubmit(e)}/>
  );
};

export default FormExample;