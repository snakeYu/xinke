import React from 'react';
import { Cascader } from 'antd';
import axios from 'axios';
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
    console.log(value);
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
  }
}
export default Coverage;
