import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import * as Example from './lib/examples';
import {Aside, Content, Footer, Header, Layout} from './lib';
import './example.scss';

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
            <li className="menu-item">
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </Aside>
        <Layout className="main-content-wrapper">
          <Content className="main-content">
            <Route path="/icon" component={Example.Icon}/>
            <Route path="/dialog" component={Example.Dialog}/>
            <Route path="/layout" component={Example.Layout}/>
            <Route path="/form" component={Example.Form}/>
          </Content>
          <Footer className="footer">Made by Caijialinxx</Footer>
        </Layout>
      </Layout>
    </Layout>
  </Router>
  , document.getElementById('app'));
