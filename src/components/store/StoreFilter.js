import React from 'react';
import { connect } from 'react-redux';
import { asyncGetStore, filtrate } from '../../actions';

class StoreFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: '综合排序', id: 0, select: true },
        { name: '价格', id: 1, select: false },
        { name: '接单数', id: 2, select: false }
      ]
    };
  }
  render() {
    return (
      <div id="StoreFilter">
        <div className="container">
          {this.state.list.map(item => {
            return (
              <span
                key={item.id}
                className={item.select ? 'sel' : ''}
                onClick={() => {
                  this.sel(item);
                  item.select = true;
                }}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
  sel(ele) {
    this.state.list.forEach(item => {
      item.select = false;
    });
    this.setState({
      list: this.state.list
    });
    if (ele.id === 1) {
      this.props.filtrate({
        _sort: 'star',
        order: 'desc',
        _limit: 6,
        _page: 1
      });
      this.props.getStore({
        _sort: 'star',
        order: 'desc',
        _limit: 6
      });
    } else if (ele.id === 2) {
      this.props.filtrate({
        _sort: 'userNum',
        order: 'desc',
        _limit: 6,
        _page: 1
      });
      this.props.getStore({
        _sort: 'userNum',
        order: 'desc',
        _limit: 6
      });
    } else {
      this.props.filtrate({
        _sort: 'id',
        order: 'desc',
        _limit: 6,
        _page: 1
      });
      this.props.getStore({
        _sort: 'id',
        order: 'desc',
        _limit: 6
      });
    }
  }
}
// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return {
    data: state.store,
    flit: state.condition
  };
}

// 映射方法到UI组件
function mapDispatchToProps(dispatch) {
  return {
    getStore: condition => {
      dispatch(asyncGetStore(condition));
    },
    filtrate: con => {
      dispatch(filtrate(con));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreFilter);
