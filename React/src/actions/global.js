import {
  ADD_SLIDEEVENT_LISTENER
} from '../constants/ActionTypes';

export const addSlideEventListener = callback => {
  return {
    type: ADD_SLIDEEVENT_LISTENER,
    callback: callback
  };
}