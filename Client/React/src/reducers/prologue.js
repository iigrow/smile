import * as types from '../constants/ActionTypes';

const initialState = {
  sences: [
    {id: 1,img: ''},
    {id: 2,img: ''}
  ]
};

function prologue(state=initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

export default prologue;