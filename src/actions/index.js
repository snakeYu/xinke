import axios from 'axios';
export const action = {
  GET_STORE: 'GET_STORE',
  FILT: 'FILT',
  add: 'ADD_CAT',
  listnav: 'NAV_LIST'
};
// navlist
export function navlist(text) {
  return {
    type: action.listnav,
    text
  };
}
// 添加购物车
export function addCat(text) {
  return {
    type: action.add,
    text
  };
}
// 获取店铺信息
export function getStore(text) {
  return {
    type: action.GET_STORE,
    text
  };
}
// 异步请求店铺信息
export function asyncGetStore(condition) {
  return dispatch => {
    return axios('/api/store', {
      params: condition
    }).then(res => {
      dispatch(getStore(res.data));
    });
  };
}
// 筛选
export function filtrate(text) {
  return {
    type: action.FILT,
    text
  };
}
