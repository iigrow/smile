import {
  SET_SMILE_IMG,
  SET_MEMOIRS_IMG,
  SET_MOSTBEAUTIFUL_IMG
} from '../constants/ActionTypes';

const setSmileImages = (imgs) => {
  return {
    type: SET_SMILE_IMG,
    imgs: imgs
  }
}

const setMemoirsImages = (imgs) => {
  return {
    type: SET_MEMOIRS_IMG,
    imgs: imgs
  }
}

const setMostBeautifulImages = (img) => {
  return {
    type: SET_MOSTBEAUTIFUL_IMG,
    img: img
  }
}

export const fetchSmileImages = () => {
  return dispatch => {
    return fetch('/api/user').then(res => {
      dispatch(setSmileImages(res.body.json()));
    }).catch(err => {
      console.log(err)
    });
  }
}

export const fetchMemoriesImages = () => {
  return dispatch => {
    return fetch('/api/user').then(res => {
      dispatch(setMemoirsImages(res.body.json()))
    })
  }
}

export const fetchMostBeautifulImage = () => {
  return dispatch => {
    return fetch('/api/user').then(res=>{
      setMemoirsImages(imgs);
    })
  }
}