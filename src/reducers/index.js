import { combineReducers } from 'redux';
import condition from './condition';
import store from './store';
import cat from './cat';
import navlist from './navlist';
export default combineReducers({
  condition,
  store,
  cat,
  navlist
});
