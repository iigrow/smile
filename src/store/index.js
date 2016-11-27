/*
 * @Author: star
 * @Date: 2016-11-26 16:37:25
 * @Last Modified by: star
 * @Last Modified time: 2016-11-26 17:32:56
 */

import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducers, null);

// if (module.hot) {
//   module
//     .hot
//     .accept('../reducers', () => {
//       const nextReducer = require('../reducers');
//       store.replaceReducer(nextReducer);
//     })
// }

export default store;