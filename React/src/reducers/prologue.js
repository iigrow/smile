import * as types from '../constants/ActionTypes';

const initialState = {
  sences: []
};

export default function prologue(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROLOGUE: return Object.assign({}, state, {
      sences: action.prologue
    });
    default: return state;
  }
}
