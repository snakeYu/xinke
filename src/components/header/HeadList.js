import React from 'react';
import { Route } from 'react-router-dom';
import StoreListPage from '../../view/StoreListPage';

import { Link } from 'react-router-dom';
class HeaderList extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 123,
      list: [
        {
          name: '全部产品',
          id: 0,
          url: '/home',
          show: true,
          component: StoreListPage
        },
        {
          name: '财税服务',
          id: 1,
          url: '/home',
          show: false
        },
        { name: '公司工商', id: 2, url: '/home', show: false },
        { name: '社保缴纳', id: 3, url: '/home', show: false },
        { name: '人事外包', id: 4, url: '/home', show: false },
        { name: '加盟我们', id: 5, url: '/home', show: false },
        { name: '店铺', id: 6, url: '/home', show: false }
      ]
    };
  }
  render() {
    const state = this.state;
    return (
      <div>
        <div className="head-list">
          <ul>
            {state.list.map(item => {
              return (
                <Link
                  to={item.url}
                  key={item.id}
                  onClick={() => {
                    this.show();
                    item.show = true;
                  }}
                >
                  <li className={item.show ? 'hid' : ''}>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="con">
          {state.list.map(item => {
            return (
              <Route key={item.id} path={item.url} component={item.component} />
            );
          })}
        </div>
      </div>
    );
  }
  show() {
    this.state.list.forEach(item => {
      item.show = false;
    });
  }
}
export default HeaderList;
