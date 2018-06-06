import React from 'react';
import StoreList from '../components/StoreList';
class StoreListPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="StoreList">
        <StoreList />
      </div>
    );
  }
}
export default StoreListPage;
