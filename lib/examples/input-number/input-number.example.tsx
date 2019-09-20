import React from 'react';
import InputNumberDemo1 from './input-number.demo.1';
import InputNumberDemo2 from './input-number.demo.2';
import InputNumberDemo3 from './input-number.demo.3';
import InputNumberDemo4 from './input-number.demo.4';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from '../common';

const InputNumberExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./input-number.demo.1.tsx').default,
      demo: <InputNumberDemo1/>,
      title: '基本用法',
      intro: `通过\`controls\`设置递增递减按钮的位置。当设置为\`null\`时，即为一个纯数字输入框，无控制按钮。若要设置精度，可使\`precision\`为一个正整数，它表示保留多少位小数位。若输入的数字超出规定的小数位，则自动四舍五入。`
    }, {
      code: require('!!raw-loader!./input-number.demo.4.tsx').default,
      demo: <InputNumberDemo4/>,
      title: '步数',
      intro: `定义步数允许输入框内的数字按照步数递增递减。`
    }, {
      code: require('!!raw-loader!./input-number.demo.2.tsx').default,
      demo: <InputNumberDemo2/>,
      title: '禁用状态',
      intro: `数字输入框的禁用状态。`
    }, {
      code: require('!!raw-loader!./input-number.demo.3.tsx').default,
      demo: <InputNumberDemo3/>,
      title: '三种尺寸',
      intro: `根据实际需求选择合适的尺寸，默认\`"default"\`。此外我们还可以通过\`width\`来设置输入框的宽度。`
    },
  ];
  const attrs: AttrProps[] = [
    {
      name: 'defaultValue',
      intro: '初始值',
      type: 'number'
    }, {
      name: 'disabled',
      intro: '是否禁用',
      type: 'boolean',
      default: 'false'
    }, {
      name: 'controls',
      intro: `控制按钮。若不需则设置为\`null\``,
      type: '"vertical" | "horizontal" | null',
      default: '"vertical"'
    }, {
      name: 'max',
      intro: '可输入的最大值',
      type: 'number',
      default: 'Infinity'
    }, {
      name: 'min',
      intro: `可输入的最小值`,
      type: 'number',
      default: '-Infinity'
    }, {
      name: 'precision',
      intro: `保留的小数位数，必须为正整数。若不设置，则默认为用户输入的小数位数与\`step\`的小数位数间的最大值`,
      type: 'number'
    }, {
      name: 'step',
      intro: `每次改变步数，可以为小数`,
      type: 'number',
      default: '1'
    }, {
      name: 'size',
      intro: `按钮尺寸。若不设置则为默认中等大小`,
      type: '"large" | "default" | "small"',
      default: '"default"'
    }, {
      name: 'width',
      intro: `数字输入内框的宽度。`,
      type: 'string | number'
    }, {
      name: 'onChange',
      intro: `数值变化时的回调`,
      type: 'function(value: number | string)'
    }
  ];
  return (
    <section className="markdown doc-input-number">
      <h1>InputNumber 数字输入框</h1>
      通过鼠标或键盘输入内容，包含基本输入框、数字输入框、密码框、搜索框等。
      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      {createAttrTable(attrs)}
    </section>
  );
};

export default InputNumberExample;