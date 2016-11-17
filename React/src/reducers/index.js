/*
 * @Author: star 
 * @Date: 2016-10-10 18:01:56 
 * @Last Modified by:   star 
 * @Last Modified time: 2016-10-10 18:01:56 
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import global from './global';
import login from './login';
import prologue from './prologue';
import smile from './smile';

export default combineReducers({
  global,
  login,
  prologue,
  smile,
  routing: routerReducer
});
