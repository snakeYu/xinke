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
              <button className="btnNum">点击获取</button>
              <input
                type="text"
                id="phoneExec"
                className="phoneExec"
                placeholder="请输入短信验证码"
              />
            </div>
            <div className="item">
              <input type="password" id="apwd" placeholder="请设置密码" />
            </div>
            <div className="item">
              <input
                type="button"
                value="立即注册"
                className="btnLogin"
                onClick={this.login}
              />
              <p className='ty'>
                注册即同意遵守  <a href=":;"> 《服务协议》</a>
              </p>
            </div>
          </div>

          <div className="fr rBox">
            已有账号？
            <p>
              <Link to="/loginx">直接登录>></Link>
            </p>
            <div className="img ri">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
