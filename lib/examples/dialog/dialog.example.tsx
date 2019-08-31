import React from 'react';
import {AttrProps, createAttrTable, createDemoColumns, createMarkdown, DemoProps} from '../common';
import DialogDemo1 from './dialog.demo.1';
import DialogDemo2 from './dialog.demo.2';
import DialogDemo3 from './dialog.demo.3';

const DialogExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./dialog.demo.1.tsx').default,
      demo: <DialogDemo1/>,
      title: '基本用法',
      intro: `使用\`<Dialog />\`标签声明一个对话框，\`visible\`属性控制对话框是否可见。可以通过\`title\`属性来设置标题。`
    }, {
      code: require('!!raw-loader!./dialog.demo.2.tsx').default,
      demo: <DialogDemo2/>,
      title: '其他自定义',
      intro: `设置\`footer\`属性可重新设计页脚，若\`footer={null}\`则表示取消页脚。重新设置\`footer\`后\`onOk\`事件失效，\`onCancel\`事件只在\`closeable={true}\`或\`maskCloseable={true}\`时生效。`
    }, {
      code: require('!!raw-loader!./dialog.demo.3.tsx').default,
      demo: <DialogDemo3/>,
      title: '内置方法的调用',
      intro: `可以使用内置的 API 调用对话框，例如\`Dialog.alert()\`和\`Dialog.confirm()\`。\`animationTrigger\`属性用来设置动画的触发方式，默认为\`auto\`自动触发。`
    }
  ];
  const attrs: AttrProps[] = [
    {
      name: 'name',
      intro: '图标名称，遵循图标的命名规范',
      type: 'string'
    }, {
      name: 'animationType',
      intro: '动画类型，在其值为 "spin" 时动画持续播放',
      type: '"spin" | "shake" | "shake-horizontal" | "shake-vertical"'
    }, {
      name: 'animationTrigger',
      intro: `动画触发的方式，在定义了\`animationType\`才生效`,
      type: '"click" | "hover" | "auto"',
      default: '"auto"'
    }
  ];
  return (
    <section className="markdown doc-dialog">
      <h1>Dialog 对话框</h1>

      <h2>何时使用</h2>
      {createMarkdown(`用户在需保留当前状态不希望跳转页面时，可使用\`Dialog\`在该页面中打开一个浮窗，以告知用户并承载相关操作。`)}

      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      {createAttrTable(attrs)}
    </section>
  );
};

export default DialogExample;