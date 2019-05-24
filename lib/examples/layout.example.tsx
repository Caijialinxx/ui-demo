import React from 'react';
import './index.scss'
import {Aside, Content, Footer, Header, Layout} from '../index';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <div className="demo-box">
        <h3>普通布局</h3>
        <Layout>
          <Header className="demo-inner">header</Header>
          <Content className="demo-inner">content</Content>
          <Footer className="demo-inner">footer</Footer>
        </Layout>
      </div>
      <div className="demo-box">
        <h3>侧边栏在局部左边</h3>
        <Layout>
          <Header className="demo-inner">header</Header>
          <Layout>
            <Aside className="demo-inner">aside</Aside>
            <Content className="demo-inner">content</Content>
          </Layout>
          <Footer className="demo-inner">footer</Footer>
        </Layout>
      </div>
      <div className="demo-box">
        <h3>侧边栏在局部右边</h3>
        <Layout>
          <Header className="demo-inner">header</Header>
          <Layout>
            <Content className="demo-inner">content</Content>
            <Aside className="demo-inner">aside</Aside>
          </Layout>
          <Footer className="demo-inner">footer</Footer>
        </Layout>
      </div>
      <div className="demo-box">
        <h3>侧边栏在全局左边</h3>
        <Layout>
          <Aside className="demo-inner">aside</Aside>
          <Layout>
            <Header className="demo-inner">header</Header>
            <Content className="demo-inner">content</Content>
            <Footer className="demo-inner">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default LayoutExample;