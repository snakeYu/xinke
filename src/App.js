import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './view/Login';
import Detail from './view/Detail';
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
          <Route path="/home" component={Detail} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
