import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Login from './view/Login';
import Main from './view';
import Home from './view/Home';
import Footer from './components/Footer';

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
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/" component={Main} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />

          <Route path="/" component={Footer} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
