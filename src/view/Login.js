import React from 'react';
import HeadTop from '../components/header/HeadTop';
import '../scss/header.scss';
const username = '';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <HeadTop username={username} />
        </header>
      </div>
    );
  }
  componentDidMount() {}
}
export default Login;
