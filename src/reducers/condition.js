import { action } from '../actions';

function condition(state = {}, actions) {
  switch (actions.type) {
    case action.FILT:
      return actions.text;
    default:
      return state;
  }
}

export default condition;
