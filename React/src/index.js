import 'babel-polyfill';
import 'fetch-ie8';
import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';

let MOUNT_NODE = document.getElementById('app');

let renderApp = () => {
  render(<App/>, MOUNT_NODE);
}

let env = 'dev';

if(env === 'dev'){
  try{
    renderApp();
  } catch(err) {
    const RedBox = require('redbox-react');
    render(<RedBox error={err} />, MOUNT_NODE);
  }
} else {
  renderApp();
}
