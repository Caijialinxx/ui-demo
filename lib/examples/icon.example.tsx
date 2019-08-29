import React from 'react';
import IconDemo1 from './icon/icon.demo.1';
import IconDemo2 from './icon/icon.demo.2';
import {Icon} from '../index';
import {AttrProps, createAttrTable, createDemoColumns, DemoProps} from './common';

const IconExample: React.FunctionComponent = () => {
  const demos: DemoProps[] = [{
    code: require('!!raw-loader!./icon/icon.demo.1.tsx').default,
    demo: <IconDemo1/>,
    title: '基本用法',
    intro: `使用\`<Icon />\`标签声明组件，指定图标对应的\`name\`属性。可以通过\`fill\`属性来改变图标的颜色，也可以通过\`style\`属性来添加 CSS 样式。`
  }, {
    code: require('!!raw-loader!./icon/icon.demo.2.tsx').default,
    demo: <IconDemo2/>,
    title: '添加动画',
    intro: `可以通过设置\`animationType\`属性为图标添加动画。当\`animationType="spin"\`时，图标会持续旋转。\`animationTrigger\`属性用来设置动画的触发方式，默认为\`auto\`自动触发。`
  }];
  const attrs: AttrProps[] = [{
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
  }, ];
  return (
    <section className="markdown doc-icon">
      <h1>Icon 图标</h1>
      <h2>图标列表</h2>
      <div>
        <h3>网站常用图标</h3>
        <ul className="icons-list">
          <li><Icon name="add"/>add</li>
          <li><Icon name="minus"/>minus</li>
          <li><Icon name="close"/>close</li>
          <li><Icon name="check"/>check</li>
          <li><Icon name="up"/>up</li>
          <li><Icon name="down"/>down</li>
          <li><Icon name="left"/>left</li>
          <li><Icon name="right"/>right</li>
          <li><Icon name="refresh"/>refresh</li>
          <li><Icon name="search"/>search</li>
          <li><Icon name="heart"/>heart</li>
          <li><Icon name="star"/>star</li>
          <li><Icon name="bell"/>bell</li>
          <li><Icon name="bin"/>bin</li>
          <li><Icon name="calendar"/>calendar</li>
          <li><Icon name="location"/>location</li>
          <li><Icon name="clock"/>clock</li>
          <li><Icon name="setting"/>setting</li>
          <li><Icon name="person"/>person</li>
          <li><Icon name="thumb-up"/>thumb-up</li>
          <li><Icon name="thumb-down"/>thumb-down</li>
          <li><Icon name="lock"/>lock</li>
          <li><Icon name="unlock"/>unlock</li>
          <li><Icon name="upload"/>upload</li>
          <li><Icon name="download"/>download</li>
          <li><Icon name="loading"/>loading</li>
          <li><Icon name="more"/>more</li>
        </ul>
      </div>
      <div>
        <h3>Emoji 表情</h3>
        <ul className="icons-list">
          <li><Icon name="emoji-happy"/>emoji-happy</li>
          <li><Icon name="emoji-cool"/>emoji-cool</li>
          <li><Icon name="emoji-angry"/>emoji-angry</li>
          <li><Icon name="emoji-sad"/>emoji-sad</li>
          <li><Icon name="emoji-shocked"/>emoji-shocked</li>
          <li><Icon name="emoji-cute"/>emoji-cute</li>
          <li><Icon name="emoji-excited"/>emoji-excited</li>
          <li><Icon name="emoji-sleepy"/>emoji-sleepy</li>
          <li><Icon name="emoji-awkward"/>emoji-awkward</li>
          <li><Icon name="emoji-surprised"/>emoji-surprised</li>
          <li><Icon name="emoji-upset"/>emoji-upset</li>
        </ul>
      </div>
      <h2>代码演示</h2>
      {createDemoColumns(demos)}
      <h2>属性</h2>
      {createAttrTable(attrs)}
    </section>
  );
};

export default IconExample;