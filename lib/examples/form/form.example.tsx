import React from 'react';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from '../common';
import FormDemo1 from './form.demo.1';
import FormDemo2 from './form.demo.2';

const FormExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./form.demo.1.tsx').default,
      demo: <FormDemo1/>,
      title: '基本用法',
      intro: `典型的页面布局。`
    },
    {
      code: require('!!raw-loader!./form.demo.2.tsx').default,
      demo: <FormDemo2/>,
      title: '更个性化的表单',
      intro: `我们可以为表单行添加标签名，甚至是非表单域的元素。\`labelWidth\`为左边标签的宽度，若设置了数值则默认向右对齐，否则全部向左顶格。`
    },
    // TODO: 校验规则rules，自定义校验validator
  ];
  const form_attrs: AttrProps[] = [
      {
        name: 'values',
        intro: '表单的数据对象，索引与表单行的\`key\`的值对应，值即为所需的数据。',
        type: '{ \\[fieldKey: string\\]: string | undefined | boolean | number }'
      }, {
        name: 'items',
        intro: '表单行。',
        type: 'FormItem[]'
      }, {
        name: 'rules',
        intro: '表单的校验规则',
        type: '{ \\[fieldKey: string\\]: FormFieldRule[] }'
      }, {
        name: 'labelWidth',
        intro: '表单左边标签的宽度',
        type: 'number | string'
      }, {
        name: 'submitButtonProps',
        intro: '`Form`组件内置的提交按钮属性',
        type: 'ButtonProps',
        default: `{ type: 'submit', theme: 'primary', value: 'Confirm' }`
      }, {
        name: 'onChange',
        intro: '表单数据变化时的回调',
        type: 'function(values: { \\[fieldKey: string\\]: string | undefined | boolean | number }[])'
      }, {
        name: 'onSubmit',
        intro: '表单数据提交时的回调',
        type: 'function(errors: { \\[fieldKey: string\\]: string[] }[] | null, values: { \\[fieldKey: string\\]: string | undefined | boolean | number }[])'
      },
    ],
    form_item_attrs: AttrProps[] = [
      {
        name: 'key',
        intro: '对应\`values\`中的\`fieldKey\`',
        type: 'string'
      }, {
        name: 'label',
        intro: '\`fieldKey\`的标签名，可选值',
        type: 'string'
      }, {
        name: 'field',
        intro: '对应表单域数据所绑定的组件。建议只绑定一个直接与\`fieldKey\`对应的数据相符的组件，而不要设置多余的与数据无关的组件（包括给其添加父元素），否则会导致数据绑定的位置错误。',
        type: 'ReactElement'
      }, {
        name: 'extra',
        intro: '额外的元素。可选值',
        type: 'ReactNode | ReactNodeArray'
      }
    ],
    form_field_rule_attrs: AttrProps[] = [
      {
        name: 'required',
        intro: '是否必填',
        type: 'boolean',
      }, {
        name: 'minLength',
        intro: '输入的最小长度',
        type: 'number',
      }, {
        name: 'maxLength',
        intro: '输入的最大长度',
        type: 'number',
      }, {
        name: 'pattern',
        intro: '正则表达式',
        type: 'RegExp',
      }, {
        name: 'validator',
        intro: '自定义验证函数',
        type: '(value: any) => Promise<string>',
      }, {
        name: 'message',
        intro: '错误信息提示',
        type: 'string',
      },
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
      <h3>FormItem</h3>
      {createAttrTable(form_item_attrs)}
      <h3>FormFieldRule</h3>
      {createAttrTable(form_field_rule_attrs)}
    </section>
  );
};

export default FormExample;