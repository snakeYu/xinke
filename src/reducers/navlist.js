import { action } from '../actions';
import StoreListPage from '../view/StoreListPage';
function navlist(
  state = [
    {
      name: '全部产品',
      id: 0,
      url: '/home/goods',
      show: true
    },
    {
      name: '财税服务',
      id: 1,
      url: '/home/server',
      show: false
    },
    {
      name: '公司工商',
      id: 2,
      url: '/home/gs',
      show: false
    },
    { name: '社保缴纳', id: 3, url: '/home/social', show: false },
    { name: '人事外包', id: 4, url: '/home/hr', show: false },
    { name: '加盟我们', id: 5, url: '/home/joinUs', show: false },
    {
      name: '店铺',
      id: 6,
      url: '/home/store',
      show: false,
      component: StoreListPage
    }
  ],
  actions
) {
  switch (actions.type) {
    case action.listnav:
      return state.map(item => {
        if (item.id === actions.text.id) {
          return Object.assign({}, item, {
            show: true
          });
        } else {
          return Object.assign({}, item, {
            show: false
          });
        }
      });
    default:
      return state;
  }
}

export default navlist;
