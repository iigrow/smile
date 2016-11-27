/*
 * @Author: star
 * @Date: 2016-11-26 16:37:19
 * @Last Modified by: star
 * @Last Modified time: 2016-11-26 17:36:00
 */

import Prologue from '../components/Prologue';

import About from '../components/About';

export default {
  path : '/',
  indexRoute : {
    component: Prologue
  },
  // redirect : {
  //   from: '',
  //   to: ''
  // },
  childRoutes : [
    {
      path: 'about',
      component: About,
      onEnter: (nextState, replaceState, callback) => {},
      onLeave: () => {}
    }
  ]
}