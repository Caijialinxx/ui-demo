import React from 'react';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from '../common';
import FormDemo1 from './form.demo.1';

const FormExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./form.demo.1.tsx').default,
      demo: <FormDemo1/>,
      title: '基本用法',
      intro: `典型的页面布局。`
    },
    // TODO: Form.Item
    // TODO: 校验规则rules，自定义校验validator
  ];
  const form_attrs: AttrProps[] = [
      {
        name: 'values',
        intro: '表单的数据对象，索引与表单域\`fields.key\`的值对应，值即为所需的数据。',
        type: '{ \\[fieldName: string\\]: string | undefined | boolean | number }'
      }, {
        name: 'fields',
        intro: '表单行。使用该属性时，组件会自动为表单提供一个提交按钮，我们提供了\`submitButtonProps\`属性来个性化设置按钮。',
        type: 'FormField[]'
      }, {
        name: 'rules',
        intro: '表单的校验规则',
        type: '{ \\[fieldName: string\\]: FormFieldRule[] }'
      }, {
        name: 'labelWidth',
        intro: '表单左边标签的宽度',
        type: 'number | string'
      }, {
        name: 'submitButtonProps',
        intro: '设置内置提交按钮的属性（仅在\`fields\`存在的情况下生效）',
        type: 'ButtonProps',
        default: `{ type: 'submit', theme: 'primary', value: 'Confirm' }`
      }, {
        name: 'onChange',
        intro: '表单数据变化时的回调',
        type: 'function(values: { \\[fieldName: string\\]: string | undefined | boolean | number }[])'
      }, {
        name: 'onSubmit',
        intro: '表单数据提交时的回调',
        type: 'function(errors: { \\[fieldName: string\\]: string[] }[] | null, values: { \\[fieldName: string\\]: string | undefined | boolean | number }[])'
      },
    ],
    form_field_attrs: AttrProps[] = [
      {
        name: 'key',
        intro: '对应\`values\`中的\`fieldName\`',
        type: 'string'
      },
      {
        name: 'label',
        intro: '\`fieldName\`的别名，可选值',
        type: 'string'
      },
      {
        name: 'component',
        intro: '对应表单域数据所绑定的组件。建议只绑定一个直接与\`fieldName\`对应的数据相符的组件，而不要设置多余的与数据无关的组件（包括给其添加父元素），否则会导致数据绑定的位置错误。',
        type: 'ReactElement'
      }
    ],
    // TODO: form_field_rule_attrs
    form_field_rule_attrs: AttrProps[] = [
      // required?: boolean;
      // minLength?: number;
      // maxLength?: number;
      // pattern?: RegExp;
      // validator?: (value: any) => Promise<string>;
      // message?: string;
    ];
  return (
    <section className="markdown doc-form">
      <h1>Form 表单</h1>
      具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
      <h2>代码演示</h2>
      {createDemoColumns(demos, true)}
      <h2>属性</h2>
      <h3>Form</h3>
      {createAttrTable(form_attrs)}
      <h3>FormField</h3>
      {createAttrTable(form_field_attrs)}
      <h3>FormFieldRule</h3>
      {createAttrTable(form_field_rule_attrs)}
    </section>
  );
};

export default FormExample;