/*
 * @Author: star
 * @Date: 2016-11-26 16:10:46
 * @Last Modified by: star
 * @Last Modified time: 2016-11-27 21:18:26
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={browserHistory} routes={routes}/>
        </Provider>
      </div>
    );
  }
}