import {
  SET_USERNAME
} from '../constants/ActionTypes';

export const setUserName = userName => {
  return {
    type: SET_USERNAME,
    userName: userName
  };
}