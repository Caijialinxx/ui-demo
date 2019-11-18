import React from 'react';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from '../common';
import CheckboxDemo1 from './checkbox.demo.1';
import CheckboxDemo2 from './checkbox.demo.2';
import CheckboxDemo3 from './checkbox.demo.3';
import CheckboxDemo4 from './checkbox.demo.4';
import CheckboxDemo5 from './checkbox.demo.5';

const CheckboxExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./checkbox.demo.1.tsx').default,
      demo: <CheckboxDemo1/>,
      title: '基本用法',
      intro: `基本用法。`
    }, {
      code: require('!!raw-loader!./checkbox.demo.2.tsx').default,
      demo: <CheckboxDemo2/>,
      title: '禁用状态',
      intro: `设置\`disabled\`为\`true\`禁用。`
    }, {
      code: require('!!raw-loader!./checkbox.demo.3.tsx').default,
      demo: <CheckboxDemo3/>,
      title: '联动的 Checkbox',
      intro: `设置\`checked\`属性可更改\`<Checkbox>\`的选择状态。`
    }, {
      code: require('!!raw-loader!./checkbox.demo.4.tsx').default,
      demo: <CheckboxDemo4/>,
      title: 'Checkbox 组',
      intro: `\`<Checkbox.Group/>\`中的\`options\`属性允许我们快速地将一个数组生成 Checkbox 组。`
    }, {
      code: require('!!raw-loader!./checkbox.demo.5.tsx').default,
      demo: <CheckboxDemo5/>,
      title: '全选联动',
      intro: `在实现全选效果时，我们可以使用\`indeterminate\`属性来实现对全选状态的样式控制。\`<Checkbox.Group/>\`中的\`value\`和\`onChange\`与全选的\`onChange\`实现联动。`
    }
  ];
  const checkbox_attrs: AttrProps[] = [
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
      name: 'indeterminate',
      intro: `负责多选框的样式控制`,
      type: 'boolean',
      default: 'false'
    }, {
      name: 'onChange',
      intro: `多选框状态改变时的回调`,
      type: 'Function(e: Event)'
    }
  ];
  const checkbox_group_attrs: AttrProps[] = [
    {
      name: 'defaultValue',
      intro: `默认选中的选项`,
      type: 'string[]',
      default: '[]'
    }, {
      name: 'disabled',
      intro: `是否禁用状态`,
      type: 'boolean',
      default: 'false'
    }, {
      name: 'options',
      intro: `Checkbox组的可选项`,
      type: 'string[] | CheckboxGroupItemProps[]',
    }, {
      name: 'value',
      intro: `指定选中的选项`,
      type: 'string[]',
    }, {
      name: 'onChange',
      intro: `Checkbox组中选项选中状态改变时的回调`,
      type: 'Function(checkedValue: string[])'
    }
  ];
  const checkbox_group_item_attrs: AttrProps[] = [
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
    <section className="markdown doc-checkbox">
      <h1>Checkbox 多选框</h1>
      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      <h3>Checkbox</h3>
      {createAttrTable(checkbox_attrs)}
      <h3>Checkbox.Group</h3>
      {createAttrTable(checkbox_group_attrs)}
      <h3>CheckboxGroupItemProps</h3>
      {createAttrTable(checkbox_group_item_attrs)}
    </section>
  );
};

export default CheckboxExample;