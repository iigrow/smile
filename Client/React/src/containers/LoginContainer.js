import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Authenticate/Login';

const propTypes = {};

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

LoginContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const {} = state;
  return {};
}

export default connect(mapStateToProps)(LoginContainer)