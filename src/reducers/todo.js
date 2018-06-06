import { action } from '../actions';

function todo(state = [], actions) {
  switch (actions.type) {
    case action.ADD_TODO:
      return [
        ...state,
        {
          text: actions.text,
          completed: false
        }
      ];
    case action.DEL_TODO:
      return state.map((item, index) => {
        if (item === actions.text) {
          return Object.assign({}, item, {
            completed: !item.completed
          });
        } else {
          return item;
        }
      });
    case action.ASYNS_DATE:
      return [...state, ...actions.text];
    default:
      return state;
  }
}

export default todo;
