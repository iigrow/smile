require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Router, Route, Link} from 'react-router';
import Login from './Authenticate/Login';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        Hello world
        { this.props.children }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
