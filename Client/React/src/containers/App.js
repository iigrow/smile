require('../styles/App.css')
import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import configureStore from '../stores';

import PrologueContainer from './PrologueContainer';
import LoginContainer from './LoginContainer';
import GuideContainer from './GuideContainer';
import MainContainer from './MainContainer';
import SmileContainer from './SmileContainer';
import MineContainer from './MineContainer';
import UserContainer from './UserContainer';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" >
            <IndexRoute component={PrologueContainer} />
            <Route path="login" component={LoginContainer} />
            <Route path="main" component={MainContainer} >
              <IndexRoute component={SmileContainer} />
              <Route path="mine" component={MineContainer} />
              <Route path="user" component={UserContainer} />
            </Route>
          </Route>
        </Router>
      </Provider>
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
export default App;