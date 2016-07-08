import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MenuBar from '../components/MenuBar';

class MainContainer extends React.Component{
  render () {
    let showNav = true; // 判断路由 深度
    let showMenu = true; // 判断路由深度
    return (
      <div>
        { showNav ? <NavigationBar/> : null }
        {this.props.children}
        { showMenu ? <MenuBar/> : null }
      </div>
    );
  }
}

export default MainContainer;