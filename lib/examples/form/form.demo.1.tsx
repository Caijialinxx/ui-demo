import React from 'react';
import {Form, FormValues, FormErrors, Input, Icon} from '../../index';

const FormDemo1: React.FunctionComponent = () => {
  const formValues: FormValues = {
    username: undefined,
    password: undefined,
  };
  const fields = [
    {
      key: 'username',
      component: (<Input prefix={<Icon name="person"/>} placeholder="Username"/>),
    },
    {
      key: 'password',
      component: (<Input type="password" prefix={<Icon name="lock"/>} placeholder="Password"/>),
    }
  ];
  const formRules = {
    username: [{required: true, message: 'Please input your username!'}],
    password: [{required: true, message: 'Please input your password!'}]
  };
  const onSubmit = (errors: FormErrors, values: FormValues) => {
    console.log('errors: ', errors);
    console.log('values: ', values);
  };
  return (
    <div className="form-demo-1">
      <Form
        values={formValues}
        fields={fields}
        rules={formRules}
        submitButtonProps={{
          style: {width: '100%'},
          value: 'Sign In'
        }}
        onSubmit={onSubmit}
      />
      <div className="form-extra">
        <a>Register now!</a>
        <a>Forget password?</a>
      </div>
    </div>
  );
};

export default FormDemo1;