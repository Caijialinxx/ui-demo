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
      name: 'visible',
      intro: '对话框是否可见',
      type: 'boolean'
    }, {
      name: 'title',
      intro: '标题',
      type: 'string | ReactNode'
    }, {
      name: 'footer',
      intro: `底部内容。若不需要默认的底部按钮，可设为\`footer={null}\``,
      type: 'null | ReactNode'
    }, {
      name: 'closeable',
      intro: '是否显示右上角的关闭按钮',
      type: 'boolean',
      default: 'true'
    }, {
      name: 'maskCloseable',
      intro: `点击蒙层是否允许关闭`,
      type: 'boolean',
      default: 'true'
    }, {
      name: 'onOk',
      intro: '点击确定的回调',
      type: 'function(e)'
    }, {
      name: 'onCancel',
      intro: `点击遮罩层或右上角X或取消按钮的回调`,
      type: 'function(e)'
    }
  ];

  const apiMd: string = `组件提供了一些静态方法，包括：
- \`Dialog.alert(contentOrProps: string | DialogFuncProps, title?: string)\`收到发咖啡
- \`Dialog.confirm(props: DialogFuncProps)\`

我们可以看到，\`Dialog.alert\`的第一个参数可以是\`string\`类型，也可以是\`DialogFuncProps\`，当类型为后者时，第二个参数\`title\`无效。具体的使用例子可参照「代码演示-内置方法的调用」。下面我们来看看\`DialogFuncProps\`的具体参数：`;
  const apiAttrs: AttrProps[] = [
    {
      name: 'content',
      intro: `对话框的内容`,
      type: 'ReactNode'
    }, {
      name: 'title',
      intro: `对话框的标题`,
      type: 'string'
    }, {
      name: 'confirmButtonText',
      intro: `对话框确定按钮的文字`,
      type: 'string',
      default: '"确定"'
    }, {
      name: 'cancelButtonText',
      intro: `对话框确定按钮的文字（在\`Dialog.alert\`中无效）`,
      type: 'string',
      default: '"取消"'
    }, {
      name: 'onOk',
      intro: `点击确定的回调，参数为关闭对话框函数`,
      type: 'function'
    }, {
      name: 'onCancel',
      intro: `点击取消的回调，参数为关闭对话框函数（在\`Dialog.alert\`中无效）`,
      type: 'function'
    }
  ];
  return (
    <section className="markdown doc-dialog">
      <h1>Dialog 对话框</h1>

      <h2>何时使用</h2>
      {createMarkdown(`用户在需保留当前状态不希望跳转页面时，可使用\`Dialog\`在该页面中打开一个浮窗，以告知用户并承载相关操作。`, 'rmd2')}

      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      {createAttrTable(attrs)}
      <h2>API</h2>
      {createMarkdown(apiMd, 'rmd2')}
      {createAttrTable(apiAttrs)}
    </section>
  );
};

export default DialogExample;