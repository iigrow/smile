import * as types from '../constants/ActionTypes';

const initialState = {
  userName: 'world'
};

function login (state = initialState, action) {
  switch(action.type){
    case types.SET_USERNAME: return Object.assign({}, state, {
      username: action.userName
    });
    default: return state;
  }
}

export default login;