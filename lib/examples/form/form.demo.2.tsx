import React from 'react';
import {Form, FormValues, FormErrors, Input, Button, Checkbox} from '../../index';

const FormDemo2: React.FunctionComponent = () => {
  const formValues: FormValues = {
    phone: undefined,
    code: undefined,
    agreement: false
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
      field: (<Checkbox>I have read the agreement</Checkbox>)
    }
  ];
  const formRules = {
    phone: [{required: true, message: 'Please input your phone number!'}],
    code: [{required: true, message: 'Please input your verification code!'}],
    agreement: [{
      validator: (checked: boolean) => {
        return new Promise((resolve, reject) => {
          checked ? resolve(checked) : reject('You must read the agreement and then check the checkbox.');
        });
      }
    }]
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