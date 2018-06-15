import React from 'react';
import { connect } from 'react-redux';
import StoreDetail from '../store/StoreDetail';
import { Link, Redirect, Route } from 'react-router-dom';
import { navlist } from '../../actions';

class HeaderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="center">
        <div className="head-list">
          <ul>
            {this.props.list.map(item => {
              return (
                <Link to={item.url} key={item.id}>
                  <li
                    className={item.show ? 'hid' : ''}
                    onClick={() => {
                      this.props.navlist(item);
                    }}
                  >
                    {item.name}
                  </li>
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
          {this.props.list.map(item => {
            return (
              <Route key={item.id} path={item.url} component={item.component} />
            );
          })}
        </div>
      </div>
    );
  }
  componentWillReceiveProps(props) {}
  componentWillMount() {}
}
function mapStateToProps(state) {
  return { list: state.navlist };
}
// 映射方法到UI组件
function mapDispatchToProps(dispatch) {
  return {
    navlist: condition => {
      dispatch(navlist(condition));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderList);
