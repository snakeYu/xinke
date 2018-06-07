import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StoreListPage from './view/StoreListPage';
import Header from './view/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login'
import Rewite from './components/rewrite/Rewrite'
import Register from './components/register/Register'
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return ( 
    <HashRouter>
      < div className = "app" >
      < Route path = "/"component = {Header} /> 
      < Route path = "/login" component = { StoreListPage} exact / >
      < Route path = "/register" component = { StoreListPage } /> 
      < Route path='/Loginx' component={Login} exact/>
      < Route path='/rewrite' component={Rewite} exact/>
      < Route path='/register' component={Register} exact/>
      < Footer/>
      </ div> 
    </ HashRouter >
    );
  }
}
export default App;