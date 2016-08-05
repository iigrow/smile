import * as types from '../constants/ActionTypes';

const initialState = {
  sences: [
    {id: 0,img: ''},
    {id: 1,img: ''}
  ]
};

export default function prologue(state=initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
