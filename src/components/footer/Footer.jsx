import React from 'react';
import './Footer.scss';
export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        ©Copyright {new Date().getFullYear()} 北京爱蓝领科技有限公司 京ICP备
        16011621号
      </footer>
    );
  }
}
