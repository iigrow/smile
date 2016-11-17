/*
 * @Author: star 
 * @Date: 2016-10-10 20:21:02 
 * @Last Modified by:   star 
 * @Last Modified time: 2016-10-10 20:21:02 
 */

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