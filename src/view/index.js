import React from 'react';
import HeadTop from '../components/header/HeadTop';
import StoreListPage from './StoreListPage';
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
        </header>
        <StoreListPage />
      </div>
    );
  }
  componentDidMount() {}
}
export default Main;
