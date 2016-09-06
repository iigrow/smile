import * as types from '../constants/ActionTypes';

const initialState = {
  smileImages: [],
  memoirsImages: [],
  prettyImage: {},
  layerImage: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_SMILE_IMG: {
      return Object.assign({}, state, {
        smileImages: action.imgs
      })
    }
    case types.SET_MEMOIRS_IMG: {
      return Object.assign({}, state, {
        memoirsImages: action.imgs
      })
    }
    case types.SET_PRETTY_IMG: {
      return Object.assign({}, state, {
        prettyImage: action.img
      })
    }
    case types.SET_LAYER_IMG: {
      return Object.assign({}, state, {
        layerImage: action.img
      })
    }
    default: return state;
  }
}