import { action } from '../actions';

function store(state = [], actions) {
  switch (actions.type) {
    case action.GET_STORE:
      return actions.text;
    default:
      return state;
  }
}

export default store;
