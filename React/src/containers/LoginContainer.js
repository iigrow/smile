import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as login from '../actions/login';

class LoginContainer extends Component {
  render() {
    return (
      <div>
        { React.Children.map(this.props.children, child => {
          return React.cloneElement(child, this.props)
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { login } = state;
  const { oauthList, userName, telError, pwdError, captchaError } = login;
  return { oauthList, userName, telError, pwdError, captchaError };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(login, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)