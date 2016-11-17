/*
 * @Author: star 
 * @Date: 2016-10-10 20:20:49 
 * @Last Modified by:   star 
 * @Last Modified time: 2016-10-10 20:20:49 
 */

import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MenuBar from '../components/Menu/MenuBar';
import Drawer from '../components/Menu/Drawer';

class MainContainer extends React.Component {
  state = {
    showNav: true, // this.props.location.pathname.split('/').length > 3,
    showMenu: true
  }
  onScroll(event) {
    // TODO: 下滑时隐藏 下侧菜单 上滑时显示 菜单
  }
  redirect() {
    const { history } = this.props;
    history.push('/main/user');
  }
  render() {
    let showNav = true;
    let showMenu = !showNav;
    return (
      <div>
        { this.state.showNav ? <NavigationBar/> : null }
        <Drawer>
        </Drawer>
        <div onScroll={this.onScroll.bind(this) }>
          { this.props.children }
        </div>
        { this.state.showMenu ? <MenuBar redirect={this.redirect.bind(this) }/> : null }
      </div>
    );
  }
}

// App.propTypes = {
//   actions: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   const props = {};
//   return props;
// }
// function mapDispatchToProps(dispatch) {
//   const actions = {};
//   const actionMap = { actions: bindActionCreators(actions, dispatch) };
//   return actionMap;
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default MainContainer;