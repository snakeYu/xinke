import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StoreListPage from './view/StoreListPage';
import Main from './view';
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route path="/" component={Main} exact />
          <Route path="/home" component={Main} />
          <Route path="/login" component={StoreListPage} />
          <Route path="/register" component={StoreListPage} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
