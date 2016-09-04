import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from '../components/Authenticate/Login';

import * as login from '../actions/login';

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Login {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { login } = state;
  const { oauthList } = login;
  return { oauthList };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(login, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)