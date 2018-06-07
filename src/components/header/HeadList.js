import React from 'react';
import {
  Link
} from 'react-router-dom';
class HeaderList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [{
          name: '全部产品',
          id: 0,
          url: '/login'
        },
        {
          name: '全部产品',
          id: 1,
          url: '/store'
        },
        {
          name: '全部产品',
          id: 2,
          url: '/store'
        },
        {
          name: '全部产品',
          id: 3,
          url: '/store'
        },
        {
          name: '全部产品',
          id: 4,
          url: '/store'
        },
        {
          name: '全部产品',
          id: 5,
          url: '/store'
        }
      ]
    };
  }
  render() {
    return ( <
      ul > {
        this.state.list.map(item => {
          return ( <
            Link to = {
              item.url
            }
            key = {
              item.id
            } >
            <
            li > {
              item.name
            } < /li> <
            /Link>
          );
        })
      } <
      /ul>
    );
  }
}
export default HeaderList;