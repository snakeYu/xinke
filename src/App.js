import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Login from './view/Login';
import Main from './view';
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // exact精确匹配
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
