import React from 'react';
import HeadList from '../components/header/HeadList';
import HeadCon from '../components/header/HeadCon';
import '../scss/header.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeadCon />
        <HeadList />
      </div>
    );
  }
  componentDidMount() {}
}
export default Home;
