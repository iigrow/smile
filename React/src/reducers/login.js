import * as types from '../constants/ActionTypes';

const initialState = {
  userName: 'world'
};

export default function login (state = initialState, action) {
  switch(action.type){
    case types.SET_USERNAME: return Object.assign({}, state, {
      username: action.userName
    });
    case types.GET_OAUTH_LIST: return Object.assign({}, state, {
      oauthList: action.oauthList
    });
    default: return state;
  }
}
