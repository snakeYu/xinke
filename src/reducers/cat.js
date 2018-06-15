import { action } from '../actions';
function catDate(state, data) {
  let count = 0;
  let stateId = state.map(item => {
    if (item.cartId === data.cartId) {
      count = 1;
      return Object.assign({}, item, {
        num: item.num + data.num
      });
    } else {
      return item;
    }
  });
  if (count === 0) {
    return [...state, data];
  } else {
    return stateId;
  }
}
function cat(state = [], actions) {
  switch (actions.type) {
    case action.add:
      return catDate(state, actions.text);
    default:
      return state;
  }
}

export default cat;
