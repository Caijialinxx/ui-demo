import React, {Fragment} from 'react';
import {Aside, Content, Footer, Header, Layout} from '../index';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <Fragment>
        <h3>普通布局</h3>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Fragment>
      <Fragment>
        <h3>侧边栏在局部左边</h3>
        <Layout>
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </Fragment>
      <Fragment>
        <h3>侧边栏在局部右边</h3>
        <Layout>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </Fragment>
      <Fragment>
        <h3>侧边栏在全局左边</h3>
        <Layout>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </Fragment>
    </div>
  );
};

export default LayoutExample;