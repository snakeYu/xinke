import { combineReducers } from 'redux';
import todo from './todo';
import store from './store';
export default combineReducers({
  todo,
  store
});
