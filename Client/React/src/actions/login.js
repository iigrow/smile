import {
  SET_USERNAME
} from '../constants/ActionTypes';

export const setUserName = userName => {
  return {
    type: SET_USERNAME,
    userName: userName
  };
}

export const login = (account, password) => {
  return dispatch => {
    return fetch(`/user/id`).then(response => {
      dispatch(setUserName(response.username));
    })
  };
}