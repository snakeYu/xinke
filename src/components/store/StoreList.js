import React from 'react';
import { connect } from 'react-redux';
import { asyncGetStore } from '../../actions';
import badge from '../../image/badge.png';
import stars from '../../image/stars.png';
import star from '../../image/star.png';
import { Link } from 'react-router-dom';
class StoreList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    var arr = (ind, length) => {
      var res = [];
      for (var i = 0; i < length; i++) {
        if (i <= ind) {
          res.push(<img src={star} alt="亮星" key={i} />);
        } else {
          res.push(<img src={stars} alt="暗星" key={i} />);
        }
      }
      return res;
    };
    return (
      <div className="StoreList">
        <div className="container">
          <ul>
            {this.props.data.map(item => {
              return (
                <li key={item.id}>
                  <div className="list-img">
                    <div className="image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="star">
                      <img src={badge} alt="徽章" />
                    </div>
                  </div>
                  <div className="list-con">
                    <div className="title">{item.name}</div>
                    <div className="star">
                      <span>荣誉</span>
                      <span>{arr(item.star, 5)}</span>
                    </div>
                    <div className="address">{item.address}</div>
                    <div className="server">
                      <span>累计服务客户数量：{item.userNum}</span>
                      <span>|</span>
                      <span>好评率：{item.praiseRate}</span>
                    </div>
                    <div className="make">
                      {item.mack.map((ele, index) => {
                        return <span key={index}>{ele}</span>;
                      })}
                    </div>
                    <Link
                      to={'/home/detail?id=' + item.id}
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      <div className="btn">进入店铺</div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  componentWillReceiveProps() {}
  componentWillMount() {
    this.props.getStore({ _page: 1, _limit: 6 });
  }
}
// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return {
    data: state.store
  };
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
)(StoreList);
