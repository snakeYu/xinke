import React from 'react';
import { Cascader } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { asyncGetStore } from '../../actions';
class Coverage extends React.Component {
  constructor() {
    super();
    this.state = {
      options: []
    };
  }
  render() {
    return (
      <div id="Coverage">
        <div className="container">
          <div className="server">服务区域</div>
          <Cascader
            options={this.state.options}
            onChange={node => {
              this.onChange(node);
            }}
            placeholder="Please select"
          />
        </div>
      </div>
    );
  }
  onChange(value) {
    const val = value.join(' ');
    console.log(val);
    this.props.getStore('?address=' + encodeURI(val) + '&_limit=6');
  }
  getAxios() {
    axios('/api/options').then(res => {
      this.setState({
        options: res.data
      });
    });
  }
  componentWillMount() {
    this.getAxios();
    console.log(this.props);
  }
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
)(Coverage);
