import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import prologue from './prologue';
import smile from './smile';

export default combineReducers({
  login,
  prologue,
  smile,
  routing: routerReducer
});
