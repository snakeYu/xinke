import React from 'react';
import StoreList from '../components/store/StoreList';
import Coverage from '../components/store/Coverage';
import StoreFilter from '../components/store/StoreFilter';
import Paging from '../components/store/Paging';

import '../scss/store.scss';

class StoreListPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="StoreList">
        <Coverage />
        <StoreFilter />
        <StoreList />
        <Paging />
      </div>
    );
  }
}
export default StoreListPage;
