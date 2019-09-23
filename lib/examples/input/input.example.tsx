import React from 'react';
import InputDemo1 from './input.demo.1';
import InputDemo2 from './input.demo.2';
import InputDemo3 from './input.demo.3';
import InputDemo4 from './input.demo.4';
import InputDemo5 from './input.demo.5';
import InputDemo6 from './input.demo.6';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from '../common';

const InputExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./input.demo.1.tsx').default,
      demo: <InputDemo1/>,
      title: '基本用法',
      intro: ``
    }, {
      code: require('!!raw-loader!./input.demo.2.tsx').default,
      demo: <InputDemo2/>,
      title: '禁用状态',
      intro: ``
    }, {
      code: require('!!raw-loader!./input.demo.3.tsx').default,
      demo: <InputDemo3/>,
      title: '三种尺寸',
      intro: ``
    }, {
      code: require('!!raw-loader!./input.demo.4.tsx').default,
      demo: <InputDemo4/>,
      title: '数字输入框',
      intro: `调用数字输入框可以使用\`<Input.Number/>\`，也可以\`<InputNumber/>\`，两种方式是等价的。更详细的数字输入框介绍请参阅[InputNumber 数字输入框](#/input-number)。`
    }, {
      code: require('!!raw-loader!./input.demo.5.tsx').default,
      demo: <InputDemo5/>,
      title: '前缀和后缀图标',
      intro: `可以为输入框上添加前缀或后缀。`
    }, {
      code: require('!!raw-loader!./input.demo.6.tsx').default,
      demo: <InputDemo6/>,
      title: '文本域',
      intro: `调用\`<Input.Textarea/>\`可产生一个文本域。除了原生的属性外，还可通过设置\`autosize\`来规定文本域如何随内容自适应高度。`
    }
  ];
  const attrs: AttrProps[] = [
    {
      name: 'size',
      intro: `输入框尺寸。若不设置则为默认中等大小`,
      type: '"large" | "default" | "small"',
      default: `"default"`
    }, {
      name: 'width',
      intro: `输入框的宽度`,
      type: 'string | number'
    }, {
      name: 'prefix',
      intro: `带有前缀图标的\`<Input/>\``,
      type: 'ReactNode'
    }, {
      name: 'suffix',
      intro: `带有后缀图标的\`<Input/>\``,
      type: 'ReactNode'
    }, {
      name: 'disabled',
      intro: `是否禁用状态，默认为\`false\``,
      type: 'boolean',
      default: 'false'
    }
  ];
  const textarea_attrs: AttrProps[] = [
    {
      name: 'autosize',
      intro: `自适应高度。默认为\`false\`，`,
      type: 'boolean | { minRows?: number; maxRows?: number }',
      default: `false`
    }
  ];
  return (
    <section className="markdown doc-input">
      <h1>Input 输入框</h1>
      通过鼠标或键盘输入内容，包含基本输入框、数字输入框、密码框、搜索框等。
      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      <h3>Input</h3>
      {createAttrTable(attrs)}
      <h3>Input.TextArea</h3>
      {createAttrTable(textarea_attrs)}
    </section>
  );
};

export default InputExample;