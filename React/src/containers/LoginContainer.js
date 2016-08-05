import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Authenticate/Login';

class LoginContainer extends Component {
  render () {
    return (
      <div>
        <Login {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

export default connect(mapStateToProps)(LoginContainer)