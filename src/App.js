import React from 'react';
import HeadTop from './components/header/HeadTop';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Login from './view/Login';

import Home from './view/Home';
import Footer from './components/Footer';
import './scss/header.scss';

const username = '';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <div className="app">
          <header>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <HeadTop username={username} />
          </header>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <footer>
            <Footer />
          </footer>
        </div>
      </HashRouter>
    );
  }
  componentDidMount() {}
}
export default App;
