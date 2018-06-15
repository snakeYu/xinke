import React from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { asyncGetStore } from '../../actions';
let condition = '';
class Paging extends React.Component {
  constructor() {
    super();
    this.state = {
      page: condition,
      current: 1,
      pageSize: 6
    };
  }
  render() {
    return (
      <div className="pagination">
        <Pagination
          showQuickJumper
          current={this.state.current}
          total={30}
          pageSize={this.state.pageSize}
          onChange={current => {
            this.setState({
              current: current
            });
            this.onChange(current);
          }}
        />
      </div>
    );
  }
  onChange(pageNumber) {
    condition = pageNumber;
    this.props.flit._page = pageNumber;
    this.props.flit._limit = 6;
    this.props.getStore(this.props.flit);
  }
  componentWillReceiveProps(newProps, oldProps) {
    if (this.props.flit._page === 1) {
      this.setState({
        current: 1
      });
    }
  }
}
// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return { data: state.store, flit: state.condition };
}

// 映射方法到UI组件
function mapDispatchToProps(dispatch) {
  return {
    getStore: condition => {
      dispatch(asyncGetStore(condition));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paging);
