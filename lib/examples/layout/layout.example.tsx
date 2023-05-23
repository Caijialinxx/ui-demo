import React from 'react';
import LayoutDemo1 from './layout.demo.1';
import {AttrProps, createAttrTable, createDemoColumns, createMarkdown, DemoProps} from '@examples/common';

const LayoutExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [
    {
      code: require('!!raw-loader!./layout.demo.1.tsx').default,
      demo: <LayoutDemo1/>,
      title: '基本用法',
      intro: `典型的页面布局。`
    },
  ];
  const attrs: AttrProps[] = [
    {
      name: 'className',
      intro: '容器\`className\`',
      type: 'string'
    }, {
      name: 'style',
      intro: '指定样式',
      type: 'CSSProperties'
    },
  ];
  return (
    <section className="markdown doc-layout">
      <h1>Layout 布局</h1>
      协助进行页面级整体布局。
      <h2>代码演示</h2>
      {createDemoColumns(demos, true)}
      <h2>属性</h2>
      <h3>Layout</h3>
      {createAttrTable(attrs)}
      {createMarkdown(`> \`Layout.Header\`、\`Layout.Footer\`、\`Layout.Content\`的属性与\`Layout\`相同`)}
    </section>
  );
};

export default LayoutExample;