import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MenuBar from '../components/MenuBar';

class MainContainer extends React.Component{
  state={
    showNav: this.props.location.pathname.split('/').length > 2,
    showMenu: true
  }
  onScroll (event) {
    console.log(event);
    // this.setState({showMenu: });
  }
  render () {
    let showNav = true;
    let showMenu = !showNav;
    return (
      <div>
        { this.state.showNav ? <NavigationBar/> : null }
        <div onScroll={this.onScroll.bind(this)}>
          { this.props.children }
        </div>
        { this.state.showMenu ? <MenuBar/> : null }
      </div>
    );
  }
}

export default MainContainer;