import React from 'react';
import '../../scss/header.scss';
import { connect } from 'react-redux';
import { asyncGetStore, addCat, navlist } from '../../actions';
import { InputNumber } from 'antd';
import Sld from './sld';
class StoreDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1
    };
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
                <div className="addr">
                  地区：<Sld />
                </div>
                <div className="num">
                  <span>购买数量</span>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={this.state.num}
                    onChange={this.onChange}
                  />
                </div>
                <div
                  className="btn"
                  id={item.id}
                  onClick={() => {
                    this.props.addCate({
                      cartId: item.id,
                      num: this.state.num,
                      price: 123,
                      title: item.name,
                      img: item.img,
                      address: item.address
                    });
                    alert('加入成功');
                  }}
                >
                  加入购物车
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  onChange = value => {
    this.setState({
      num: value
    });
  };
  urlJson(url) {
    var href = url;
    var params = href.split('?')[1];
    var paramArr = params.split('&');
    var res = {};
    for (var i = 0; i < paramArr.length; i++) {
      var str = paramArr[i].split('=');
      res[str[0]] = str[1];
    }
    return res;
  }

  componentDidMount() {
    this.props.getStore(this.urlJson(this.props.location.search));
  }
}
// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return { data: state.store, catDate: state.cat, list: state.navlist };
}
// 映射方法到UI组件
function mapDispatchToProps(dispatch) {
  return {
    getStore: condition => {
      dispatch(asyncGetStore(condition));
    },
    addCate: text => {
      dispatch(addCat(text));
    },
    navlist: condition => {
      dispatch(navlist(condition));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreDetail);
