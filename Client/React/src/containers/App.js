import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    // const {actions} = this.props;
    return (
      <div>world
        { this.props.children }
      </div>
    );
  }
}

// App.propTypes = {
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  const props = {};
  return props;
}
// function mapDispatchToProps(dispatch) {
//   const actions = {};
//   const actionMap = { actions: bindActionCreators(actions, dispatch) };
//   return actionMap;
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps)(App);