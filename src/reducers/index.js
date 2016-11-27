/*
 * @Author: star
 * @Date: 2016-11-26 17:33:40
 * @Last Modified by: star
 * @Last Modified time: 2016-11-27 21:38:58
 */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import global from './global';

export default combineReducers({global, routing: routerReducer})