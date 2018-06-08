import React from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { asyncGetStore } from '../../actions';
let condition = '';
class Paging extends React.Component {
  constructor() {
    super();
    this.state = {
      page: condition
    };
  }
  render() {
    return (
      <div className="pagination">
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={50}
          onChange={node => {
            this.onChange(node);
          }}
        />
      </div>
    );
  }
  onChange(pageNumber) {
    condition = pageNumber;
    this.props.getStore('?_page=' + pageNumber + '&_limit=6');
  }
  componentWillMount() {}
}
// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return { data: state.store };
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
