import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import * as Example from './lib/examples';
import {Aside, Content, Footer, Header, Layout} from './lib';
import './example.scss';

const ROUTERS = [
  {
    key: 'icon',
    name: 'Icon 图标',
    component: Example.Icon
  }, {
    key: 'button',
    name: 'Button 按钮',
    component: Example.Button
  }, {
    key: 'input',
    name: 'Input 输入框',
    component: Example.Input
  }, {
    key: 'input-number',
    name: 'InputNumber 数字输入框',
    component: Example.InputNumber
  }, {
    key: 'radio',
    name: 'Radio 单选框',
    component: Example.Radio
  }, {
    key: 'checkbox',
    name: 'Checkbox 多选框',
    component: Example.Checkbox
  }, {
    key: 'dialog',
    name: 'Dialog 对话框',
    component: Example.Dialog
  }, {
    key: 'layout',
    name: 'Layout 布局',
    component: Example.Layout
  }, {
    key: 'form',
    name: 'Form 表单',
    component: Example.Form
  }
];

ReactDOM.render(
  <Router>
    <Layout className="examples-doc">
      <Header className="header">
        <div className="logo">
          <img src={require('./logo.png')} alt="CUI"/>
          CUI
        </div>
        <ul>
          <li>Github</li>
        </ul>
      </Header>
      <Layout className="body">
        <Aside className="main-menu">
          <p className="menu-title">组件</p>
          <ul className="sub-menu">
            {
              ROUTERS.map(router => (
                <li key={router.key} className="menu-item">
                  <NavLink to={'/' + router.key}>{router.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </Aside>
        <Layout className="main-content-wrapper">
          <Content className="main-content">
            {
              ROUTERS.map(router => (
                <Route key={router.key} path={'/' + router.key} component={router.component}/>
              ))
            }
          </Content>
          <Footer className="footer">Made by Caijialinxx</Footer>
        </Layout>
      </Layout>
    </Layout>
  </Router>
  , document.getElementById('app'));
