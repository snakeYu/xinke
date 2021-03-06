import React from 'react';
import HeadTop from './components/header/HeadTop';
import { HashRouter, Route, Redirect } from 'react-router-dom';
// import Login from './view/Login';

import Home from './view/Home';

import './scss/header.scss';


import Index from './components/index/index'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Rewite from './components/rewrite/Rewrite'
import Register from './components/register/Register'


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
            <Route exact path="/" render={() => <Redirect to="/index" />} />
            <HeadTop username={username} />
            
          </header>
          <Route path="/home" component={Home} />
          <Route path='/index' component={Index}/>
          <Route path="/login" component={Login} />
          < Route path='/Loginx' component={Login} exact/>
        < Route path='/rewrite' component={Rewite} exact/>
        < Route path='/register' component={Register} exact/>
          <footer>
            <Footer />
          </footer>
        </div>
      </HashRouter>)

  }

}
export default App;