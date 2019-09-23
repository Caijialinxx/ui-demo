import React from 'react';
import {Aside, Content, Footer, Header, Layout} from '../../index';

const LayoutDemo1: React.FunctionComponent = () => {
  return (
    <div className="layout-demo-1">
      <Layout>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>

      <Layout>
        <Header>header</Header>
        <Layout>
          <Aside>aside</Aside>
          <Content>content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>

      <Layout>
        <Header>header</Header>
        <Layout>
          <Content>content</Content>
          <Aside>aside</Aside>
        </Layout>
        <Footer>footer</Footer>
      </Layout>

      <Layout>
        <Aside>aside</Aside>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutDemo1;