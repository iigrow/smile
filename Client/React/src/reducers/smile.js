import * as types from '../constants/ActionTypes';

const initialState = {
  smileImages: [],
  memoirsImages: [],
  mostBeautiful: {}
};

export default function(state = initialState, action){
  switch(action.type){
    case types.SET_SMILE_IMG: {
      return Object.assign({},state,{
        smileImages: action.imgs
      })
    }
    case types.SET_MEMOIRS_IMG: {
      return Object.assign({},state,{
        memoirsImages: action.imgs
      })
    }
    case types.SET_MOSTBEAUTIFUL_IMG: {
      return Object.assign({},state,{
        mostBeautiful: action.img
      })
    }
    default: return state;
  }
}