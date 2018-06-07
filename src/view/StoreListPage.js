import React from 'react';
import StoreList from '../components/store/StoreList';
import Coverage from '../components/store/Coverage';
import StoreFilter from '../components/store/StoreFilter';
import Paging from '../components/store/Paging';
import HeadList from '../components/header/HeadList';
import HeadCon from '../components/header/HeadCon';
import '../scss/store.scss';
class StoreListPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="StoreList">
        <HeadCon />
        <HeadList />
        <Coverage />
        <StoreFilter />
        <StoreList />
        <Paging />
      </div>
    );
  }
}
export default StoreListPage;
