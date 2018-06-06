import axios from 'axios';
export const action = {
  ADD_TODO: ' ADD_TODO',
  DEL_TODO: ' DEL_TODO',
  ASYNS_DATE: ' ASYNS_DATE'
};
export function addTodo(text) {
  return {
    type: action.ADD_TODO,
    text
  };
}
export function delTodo(text) {
  return {
    type: action.DEL_TODO,
    text
  };
}

export function aysDate(text) {
  return {
    type: action.ASYNS_DATE,
    text
  };
}
export function asyncDelStu() {
  return dispatch => {
    return axios('/api/data').then(res => {
      dispatch(aysDate(res.data));
    });
  };
}
