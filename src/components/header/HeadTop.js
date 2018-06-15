import React from 'react';
import '../../scss/header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HeadTop extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      num: props.catDate.length
    });
  }
  render() {
    return (
      <div className="head">
        <div className="head-top">
          <div className="container">
            <div className="con-left">
              <span className="username col">{this.props.username}</span>
              <span className="welcome-pad">欢迎来到薪客！</span>
              <span className={this.props.username === '' ? 'hid' : 'show'}>
                <span>
                  请<Link to="/login">
                    <span className="login col">登陆</span>
                  </Link>
                </span>
                <Link to="/login">
                  <span className="register col">注册</span>
                </Link>
              </span>
            </div>
            <div className="con-right">
              <span className="cart" style={{ cursor: 'pointer' }}>
                购物车<span className="col">{this.state.num}</span>件
              </span>
              <span className="col">服务商入口</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { catDate: state.cat };
}

export default connect(mapStateToProps)(HeadTop);
