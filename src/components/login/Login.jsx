import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
export default class Login extends React.Component {
  constructor() {
    super();
    this.sate = {};
  }
  render() {
    return (
      <div className="y_all">
        <div className="container clear">
          <div className="fl lBox">
            <div className="item">
              <input type="text" id="phone" placeholder="请输入手机号码" />
            </div>
            <div className="item">
              <input
                type="text"
                id="exec"
                className="exec"
                placeholder="请输入验证码"
              />
              <div className="testImg" />
            </div>
            <div className="item">
              <input type="password" id="pwd" placeholder="请输入密码" />
            </div>
            <p className="forget">
              <Link to="/rewrite">忘记密码？</Link>
            </p>
            <div className="item">
              <input
                type="button"
                value="立刻登录"
                className="btnLogin"
                onClick={this.login}
              />
            </div>
          </div>

          <div className="fr rBox">
            还没有账号？
            <p>
              <Link to="/register">立即注册>></Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  login = () => {
    console.log(1);
  };
}
