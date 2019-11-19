import React from 'react';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from '../common';
import RadioDemo1 from './radio.demo.1';
import RadioDemo2 from './radio.demo.2';
import RadioDemo3 from './radio.demo.3';
import RadioDemo4 from './radio.demo.4';

const RadioExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./radio.demo.1.tsx').default,
      demo: <RadioDemo1/>,
      title: '基本用法',
      intro: `使用\`options\`属性快速地将一个数组生成 Radio 组。\`defaultValue\`属性为这个组添加默认选中的选项。`
    }, {
      code: require('!!raw-loader!./radio.demo.2.tsx').default,
      demo: <RadioDemo2/>,
      title: '禁用状态',
      intro: `设置\`disabled\`为\`true\`禁用。`
    }, {
      code: require('!!raw-loader!./radio.demo.3.tsx').default,
      demo: <RadioDemo3/>,
      title: '配置 name 属性',
      intro: `为\`<Radio.Group/>\`配置\`name\`参数可为组合内的\`<input/>\`元素赋予相同的\`name\`属性，使浏览器把\`<Radio.Group/>\`下的\`<Radio/>\`真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。`
    }, {
      code: require('!!raw-loader!./radio.demo.4.tsx').default,
      demo: <RadioDemo4/>,
      title: '更灵活的组合',
      intro: `除了配置\`options\`来生成 Radio 组外，我们还可直接在\`<Radio.Group/>\`内添加多个\`<Radio/>\`。\`<Radio.Group/>\`的\`value\`指定当前选中的值，\`<Radio/>\`中的\`value\`与前者匹配时，则当前选项选中。`
    }
  ];
  const radio_attrs: AttrProps[] = [
    {
      name: 'autoFocus',
      intro: `自动获取焦点`,
      type: 'boolean',
    }, {
      name: 'checked',
      intro: `指定当前是否选中`,
      type: 'boolean',
    }, {
      name: 'defaultChecked',
      intro: `初始是否选中`,
      type: 'boolean',
      default: 'false'
    }, {
      name: 'disabled',
      intro: `是否禁用状态`,
      type: 'boolean',
      default: 'false'
    }, {
      name: 'value',
      intro: `原生 value 属性。若不设置，则默认为其\`children\`值，此时请确保\`children\`为简单类型，否则可能会引起错误。建议设置。`,
      type: 'string | number',
    }, {
      name: 'onChange',
      intro: `多选框状态改变时的回调`,
      type: 'Function(e: Event)'
    }
  ];
  const radio_group_attrs: AttrProps[] = [
    {
      name: 'defaultValue',
      intro: `默认选中的选项`,
      type: 'string',
    }, {
      name: 'disabled',
      intro: `是否禁用状态`,
      type: 'boolean',
      default: 'false'
    }, {
      name: 'name',
      intro: `\`<Radio.Group/>\`下所有\`input[type="radio"]\`的\`name\`属性`,
      type: 'string',
    }, {
      name: 'options',
      intro: `Radio组的可选项`,
      type: 'string[] | RadioGroupItemProps[]',
    }, {
      name: 'value',
      intro: `指定选中的选项`,
      type: 'string',
    }, {
      name: 'onChange',
      intro: `Radio组中选项选中状态改变时的回调`,
      type: 'Function(e: Event)'
    }
  ];
  const radio_group_item_attrs: AttrProps[] = [
    {
      name: 'label',
      intro: `选项显示的名称，可选。若不设置则默认为\`value\`的值`,
      type: 'string',
    }, {
      name: 'value',
      intro: `选项的值，必填`,
      type: 'string',
    }, {
      name: 'disabled',
      intro: `此选项是否禁用，可选`,
      type: 'boolean'
    }
  ];
  return (
    <section className="markdown doc-radio">
      <h1>Radio 单选框</h1>
      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      <h3>Radio</h3>
      {createAttrTable(radio_attrs)}
      <h3>Radio.Group</h3>
      {createAttrTable(radio_group_attrs)}
      <h3>RadioGroupItemProps</h3>
      {createAttrTable(radio_group_item_attrs)}
    </section>
  );
};

export default RadioExample;