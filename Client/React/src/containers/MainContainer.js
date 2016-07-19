import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MenuBar from '../components/Menu/MenuBar';
import Drawer from '../components/Menu/Drawer';

class MainContainer extends React.Component{
  state = {
    showNav: true, // this.props.location.pathname.split('/').length > 3,
    showMenu: true
  }
  onScroll (event) {
    console.log(this.context);
    // this.setState({showMenu: });
  }
  redirect () {
    const { history } = this.props;
    history.push('/main/user');
  }
  render () {
    let showNav = true;
    let showMenu = !showNav;
    return (
      <div>
        { this.state.showNav ? <NavigationBar/> : null }
        <Drawer>
        </Drawer>
        <div onScroll={this.onScroll.bind(this)}>
          { this.props.children }
        </div>
        { this.state.showMenu ? <MenuBar redirect={this.redirect.bind(this)}/> : null }
      </div>
    );
  }
}

export default MainContainer;