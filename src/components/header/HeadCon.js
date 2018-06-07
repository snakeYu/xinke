import React from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
class HeadCon extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: '社保开户', id: 0, url: '/' },
        { name: '公司注册', id: 1, url: '/' },
        { name: '小规模纳税人代理记账', id: 2, url: '/' }
      ]
    };
  }
  render() {
    const Search = Input.Search;
    return (
      <div className="headerCon">
        <div className="container">
          <div className="image list" />
          <div className="sel list">
            <Search
              placeholder="搜索您需要的服务或服务商"
              onSearch={value => console.log(value)}
              enterButton
            />
            <p>
              <span>热门服务：</span>
              {this.state.list.map(item => {
                return (
                  <Link to={item.url} key={item.id}>
                    <span>{item.name}/</span>
                  </Link>
                );
              })}
            </p>
          </div>
          <div className="phone list">
            <span className="image" />
            <span>010-53380229</span>
          </div>
        </div>
      </div>
    );
  }
}
export default HeadCon;
