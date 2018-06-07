import React from 'react';
import HeadTop from '../components/header/HeadTop';
import HeadList from '../components/header/HeadList';
import HeadCon from '../components/header/HeadCon';

import '../scss/header.scss';

const username = '';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <HeadTop username={username} />
          <HeadCon />
        </header>
        <HeadList />
      </div>
    );
  }
  componentDidMount() {}
}
export default Main;
