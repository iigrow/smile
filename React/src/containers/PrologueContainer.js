import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Prologue from '../components/Prologue';

class PrologueContainer extends React.Component {
  static propTypes = {
    sences: PropTypes.array.isRequired
  }
  render() {
    return <Prologue {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { prologue } = state;
  const { sences } = prologue;
  return { sences };
}

export default connect(mapStateToProps)(PrologueContainer);