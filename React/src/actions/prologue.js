import {
  SET_PROLOGUE
} from '../constants/ActionTypes';

export const fetchPrologueInfo = () => {
  return dispatch => {
    return fetch('/api/prologue').then(res => {
      res.json().then(data => {
        dispatch({
          type: SET_PROLOGUE,
          prologue: data.prologue
        })
      }).catch(err => {
        console.log(err);
      })
    })
  }
}