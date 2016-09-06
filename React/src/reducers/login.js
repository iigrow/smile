import * as types from '../constants/ActionTypes';

const initialState = {
  userName: null,
  oauthList: [],
  telError: null,
  pwdError: null,
  captchaError: null
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERNAME: return Object.assign({}, state, {
      username: action.userName
    });
    case types.GET_OAUTH_LIST: return Object.assign({}, state, {
      oauthList: action.oauthList
    });
    case types.SET_TELERROR: return Object.assign({}, state, {
      telError: action.telError
    });
    case types.SET_PWDERROR: return Object.assign({}, state, {
      pwdError: action.pwdError
    })
    case types.SET_CAPTCHAERROR: return Object.assign({}, state, {
      captchaError: action.captchaError
    })
    default: return state;
  }
}
