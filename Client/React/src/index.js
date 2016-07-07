import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import NavContainer from './containers/NavContainer';
import SmileContainer from './containers/SmileContainer';
import MineContainer from './containers/MineContainer';


const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
