import {
  SET_SMILE_IMG,
  SET_MEMOIRS_IMG,
  SET_PRETTY_IMG,
  SET_LAYER_IMG
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

const setPrettyImage = (img) => {
  return {
    type: SET_PRETTY_IMG,
    img: img
  }
}

export const showLayerImage = (img) => {
  return {
    type: SET_LAYER_IMG,
    img: img
  }
}

export const hideLayerImage = () => {
  return {
    type: SET_LAYER_IMG,
    img: null
  }
}

export const fetchSmileImages = () => {
  return dispatch => {
    return fetch('/api/photo/all').then(res => {
      res.json().then(data => {
        dispatch(setSmileImages(data));
      })
    }).catch(err => {
      console.log(err)
    });
  }
}

export const fetchMemoriesImages = () => {
  return dispatch => {
    return fetch('/api/photo/memory').then(res => {
      res.json().then(data => {
        dispatch(setMemoirsImages(data));
      })
    })
  }
}

export const fetchPrettyImage = () => {
  return dispatch => {
    return fetch('/api/photo/pretty').then(res => {
      res.json().then(data => {
        dispatch(setPrettyImage(data));
      })
    })
  }
}