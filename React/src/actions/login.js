/*
 * @Author: star 
 * @Date: 2016-09-05 15:55:36 
 * @Last Modified by: star
 * @Last Modified time: 2016-09-05 18:00:36
 */

import {
  SET_USERNAME,
  GET_OAUTH_LIST,
  SET_TELERROR,
  SET_PWDERROR,
  SET_CAPTCHAERROR
} from '../constants/ActionTypes';

export const setUserName = userName => {
  return {
    type: SET_USERNAME,
    userName: userName
  };
}

export const setTelError = errMsg => {
  return {
    type: SET_TELERROR,
    telError: errMsg
  }
}

export const setPwdError = errMsg => {
  return {
    type: SET_PWDERROR,
    pwdError: errMsg
  }
}

export const setCaptchaError = errMsg => {
  return {
    type: SET_CAPTCHAERROR,
    captchaError: errMsg
  }
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