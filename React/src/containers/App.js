/*
 * @Author: star 
 * @Date: 2016-09-09 23:38:45 
 * @Last Modified by: star
 * @Last Modified time: 2016-09-10 00:01:14
 */
require('../styles/App.css');

import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../stores';

import PrologueContainer from './PrologueContainer';
import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';
import SmileContainer from './SmileContainer';
import MineContainer from './MineContainer';
import UserContainer from './UserContainer';

import Account from '../components/Authenticate/Account';
import Password from '../components/Authenticate/Password';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)


/**
 * login container
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" >
            <IndexRoute component={PrologueContainer} />
            <Route path="login" component={LoginContainer}>
              <Route path="account" component={Account} />
              <Route path="password" component={Password} />
            </Route>
            <Route path="main" component={MainContainer} onEnter={() => { console.log('enter') } }>
              <IndexRoute component={SmileContainer} />
              <Route path="smile" component={SmileContainer} />
              <Route path="mine" component={MineContainer} />
              <Route path="user" component={UserContainer} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}
