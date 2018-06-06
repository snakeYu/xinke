import React from 'react';
import HeadTop from '../components/header/HeadTop';
import HeadList from '../components/header/HeadList';

import '../scss/header.scss';
const username = '';
class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header>
        <HeadTop username={username} />
        <HeadList />
      </header>
    );
  }
  componentDidMount() {}
}
export default Header;
