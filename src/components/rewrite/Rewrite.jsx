import React from 'react';
import '../login/Login.scss';
import { Link } from 'react-router-dom';
export default class Rewrite extends React.Component {
  constructor() {
    super();
    this.state = {};
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
              <div className="testImg" />
              <input
                type="text"
                id="exec"
                className="exec"
                placeholder="请输入验证码"
              />
            </div>
            <div className="item">
              <button className="btnNum" >获取验证码</button>
              <input
                type="text"
                id="phoneExec"
                className="phoneExec"
                placeholder="请输入验证码"
              />
            </div>
            <div className="item">
              <input type="password" id="pwd" placeholder="请输入密码" />
            </div>
            <div className="item">
              <input type="password" id="apwd" placeholder="请再次确定密码" />
            </div>
            <div className="item">
              <input
                type="button"
                value="确定修改"
                className="btnLogin"
                onClick={this.login}
              />
            </div>
          </div>

          <div className="fr rBox">
            想起来密码了？
            <p>
              <Link to="/loginx">返回登录>></Link>
            </p>
            <div className="img re">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
