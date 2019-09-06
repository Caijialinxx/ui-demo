import React from 'react';
import ButtonDemo1 from './button.demo.1';
import ButtonDemo2 from './button.demo.2';
import ButtonDemo3 from './button.demo.3';
import ButtonDemo4 from './button.demo.4';
import ButtonDemo5 from './button.demo.5';
import ButtonDemo6 from './button.demo.6';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from '../common';

const ButtonExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./button.demo.1.tsx').default,
      demo: <ButtonDemo1/>,
      title: '按钮主题',
      intro: `按钮主题分别有：默认按钮、主按钮(primary)、成功按钮(success)、信息按钮(info)、警告按钮(warning)、危险按钮(danger)。`
    }, {
      code: require('!!raw-loader!./button.demo.2.tsx').default,
      demo: <ButtonDemo2/>,
      title: '按钮形状和图标按钮',
      intro: `通过\`shape\`属性来设置按钮的形状，除了默认的矩形，还有圆形\`circle\`和圆角\`round\`。还可以通过\`icon\`属性为按钮快捷地添加图标，可选值请参考[Icon 图标](#/icon)。`
    }, {
      code: require('!!raw-loader!./button.demo.3.tsx').default,
      demo: <ButtonDemo3/>,
      title: '按钮模式',
      intro: `按钮模式可以通过\`mode\`属性设置为\`plain\`朴素按钮或者\`text\`文字按钮。`
    }, {
      code: require('!!raw-loader!./button.demo.4.tsx').default,
      demo: <ButtonDemo4/>,
      title: '按钮尺寸',
      intro: `按钮可以通过设置\`size\`为\`large\`或\`small\`分别将按钮设置为大、小尺寸。若不设置，则尺寸默认为中。`
    }, {
      code: require('!!raw-loader!./button.demo.5.tsx').default,
      demo: <ButtonDemo5/>,
      title: '加载中状态',
        intro: `当\`loading\`属性为\`true\`时，按钮会出现一个加载图标，且不响应事件。`
    }, {
      code: require('!!raw-loader!./button.demo.6.tsx').default,
      demo: <ButtonDemo6/>,
      title: '禁用状态',
      intro: `添加\`disabled\`属性即可让按钮处于不可用状态，同时按钮样式也会改变。当\`mode="text"\`时，无论是什么主题都一律变成灰色字体，除此之外的按钮则是颜色加深灰度。`
    }
  ];
  const attrs: AttrProps[] = [
    {
      name: 'theme',
      intro: '按钮主题。可以在不同场景需求下使用对应的主题，若不设置则为默认样式',
      type: '"primary" | "success" | "info" | "warning" | "danger"'
    }, {
      name: 'shape',
      intro: '按钮形状。若不设置，则为默认的矩形',
      type: '"circle" | "round"'
    }, {
      name: 'mode',
      intro: `按钮模式`,
      type: '"text" | "plain"'
    }, {
      name: 'size',
      intro: `按钮尺寸。若不设置则为默认中等大小`,
      type: '"large" | "small"'
    }, {
      name: 'icon',
      intro: `设置按钮的图标类型。具体可选值参考[Icon 图标](#/icon)`,
      type: 'string'
    }, {
      name: 'loading',
      intro: `按钮是否处于加载中状态`,
      type: 'boolean',
      default: 'false'
    }, {
      name: 'onClick',
      intro: `点击按钮的回调`,
      type: 'function(e)'
    }
  ];
  return (
    <section className="markdown doc-button">
      <h1>Button 按钮</h1>
      提供了丰富样式的操作按钮。
      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      {createAttrTable(attrs)}
    </section>
  );
};

export default ButtonExample;