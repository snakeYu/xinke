import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StoreListPage from './view/StoreListPage';
import Header from './view/Header';
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route path="/" component={Header} />
          <Route path="/login" component={StoreListPage} exact />
          <Route path="/register" component={StoreListPage} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
