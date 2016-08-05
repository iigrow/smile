import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';

const propTypes = {};

class NavContainer extends Component{
  render () {
    return <NavigationBar />;
  }
}

NavContainer.propTypes = propTypes;

export default NavContainer;