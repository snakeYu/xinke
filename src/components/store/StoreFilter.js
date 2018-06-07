import React from 'react';

class StoreFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: '综合排序', id: 0, select: true },
        { name: '综合排序', id: 1, select: false },
        { name: '综合排序', id: 2, select: false }
      ]
    };
  }
  render() {
    return (
      <div id="StoreFilter">
        <div className="container">
          {this.state.list.map(item => {
            return (
              <span
                key={item.id}
                className={item.select ? 'sel' : ''}
                onClick={() => {
                  this.sel(item);
                  item.select = true;
                }}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
  sel(ele) {
    this.state.list.forEach(item => {
      item.select = false;
    });
    this.setState({
      list: this.state.list
    });
  }
}
export default StoreFilter;
