import React from 'react';
import {Form, FormValues, FormErrors, Input, Button} from '../../index';

const FormDemo2: React.FunctionComponent = () => {
  const formValues: FormValues = {
    username: undefined,
    password: undefined,
  };
  const items = [
    {
      key: 'phone',
      label: 'Phone Number',
      field: (<Input/>),
    }, {
      key: 'code',
      label: 'Verification Code',
      field: (<Input/>),
      extra: (<Button>Send Message</Button>)
    }, {
      key: 'agreement',
      field: (<input type="checkbox"/>)
    }
  ];
  const formRules = {
    phone: [{required: true, message: 'Please input your phone number!'}],
    code: [{required: true, message: 'Please input your verification code!'}]
  };
  const onSubmit = (errors: FormErrors, values: FormValues) => {
    console.log('errors: ', errors);
    console.log('values: ', values);
  };
  return (
    <div className="form-demo-2">
      <Form
        labelWidth={200}
        values={formValues}
        items={items}
        rules={formRules}
        onSubmit={onSubmit}/>
    </div>
  );
};

export default FormDemo2;