import React from 'react';
import StoreListPage from '../../view/StoreListPage';
import StoreDetail from '../store/StoreDetail';
import { Link, Redirect, Route } from 'react-router-dom';
class HeaderList extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 123,
      list: [
        {
          name: '全部产品',
          id: 0,
          url: '/home/goods',
          show: true,
          component: StoreListPage
        },
        {
          name: '财税服务',
          id: 1,
          url: '/home/server',
          show: false
        },
        {
          name: '公司工商',
          id: 2,
          url: '/home/gs',
          show: false
        },
        { name: '社保缴纳', id: 3, url: '/home/social', show: false },
        { name: '人事外包', id: 4, url: '/home/hr', show: false },
        { name: '加盟我们', id: 5, url: '/home/joinUs', show: false },
        {
          name: '店铺',
          id: 6,
          url: '/home/store',
          show: false,
          component: StoreListPage
        }
      ]
    };
  }
  render() {
    const state = this.state;
    return (
      <div className="center">
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
          <Route path="/home/detail" component={StoreDetail} />
          <Route
            exact
            path="/home"
            render={() => <Redirect to="/home/goods" />}
          />
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
