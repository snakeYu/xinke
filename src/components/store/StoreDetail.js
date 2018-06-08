import React from 'react';
import '../../scss/header.scss';
import { connect } from 'react-redux';
import { asyncGetStore } from '../../actions';
import { InputNumber } from 'antd';
class StoreDetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="storeDetail">
        {this.props.data.map((item, index) => {
          return (
            <div className="detailTop" key={index}>
              <div className="image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="con">
                <div className="title">{item.name}</div>
                <div className="mack"> 线上提交材料，为你快速注册公司</div>
                <div className="price">
                  <div className="old">
                    <div>市场价：</div>
                    <div className="thought">$123</div>
                  </div>
                  <div className="new">
                    <span>价格：</span>
                    <span className="col">$123</span>
                    <span className="tab">套餐更优惠</span>
                  </div>
                </div>
                <div className="type">
                  类型：
                  <span>有限公司注册</span>
                  <span>有限公司注册</span>
                  <span>有限公司注册</span>
                </div>
                <div className="addr">地区：</div>
                <div className="num">
                  购买数量
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  onChange(value) {
    console.log('changed', value);
  }
  componentWillMount() {
    this.props.getStore(this.props.location.search);
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
)(StoreDetail);
