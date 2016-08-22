import * as types from '../constants/ActionTypes';

const initialState = {
  sences: [
    {id: 0,img: '/assets/img/pic_006.jpg'},
    {id: 1,img: '/assets/img/pic_007.jpg'},
    {id: 2,img: '/assets/img/pic_008.jpg'},
    {id: 3,img: '/assets/img/pic_009.jpg'}
  ]
};

export default function prologue(state=initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
