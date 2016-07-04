import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import configureStore from './stores';
import App from './containers/App';
import Login from './components/Authenticate/Login';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} >
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
