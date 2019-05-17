import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import * as Example from './lib/examples';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">CUI</div>
      </header>
      <div className="body">
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={Example.Icon}/>
        </main>
      </div>
    </div>
  </Router>
  , document.getElementById('app'));
