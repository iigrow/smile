import {
  SET_USERNAME,
  GET_OAUTH_LIST
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

export const getOauthList = () => {
  return dispatch => {
    return fetch('/api/auth/oauth').then(res => {
      res.json().then(data => {
        dispatch({
          type: GET_OAUTH_LIST,
          oauthList: data
        })
      })
    }).catch(err => {
      console.log(err);
    })
  }
}