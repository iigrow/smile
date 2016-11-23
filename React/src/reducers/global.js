/*
 * @Author: star 
 * @Date: 2016-10-10 17:47:48 
 * @Last Modified by: star
 * @Last Modified time: 2016-11-19 13:55:50
 */

import * as types from '../constants/ActionTypes';

const initialState = {
  slideEvent: []
}

export default function global(state = initialState, action) {
  switch (action.type) {
    case types.ADD_SLIDEEVENT_LISTENER:
      return Object.assign({}, state, {
        slideEvent: state.slideEvent.slice(0).push(action.callback)
      });
    default:
      return state;
  }
}