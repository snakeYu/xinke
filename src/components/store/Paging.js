import React from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { asyncGetStore } from '../../actions';
class Paging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="pagination">
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={500}
          onChange={this.onChange}
        />
      </div>
    );
  }
  onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
  componentWillMount() {
    this.props.getStore();
  }
}
// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return { data: state.store };
}

// 映射方法到UI组件
function mapDispatchToProps(dispatch) {
  return {
    getStore: () => {
      dispatch(asyncGetStore());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paging);
