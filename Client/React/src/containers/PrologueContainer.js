import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Prologue from '../components/Prologue';

const propTypes = {
  sences: PropTypes.array.isRequired
};

class PrologueContainer extends React.Component{
  render () { 
    return <Prologue {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { prologue } = state;
  const { sences } = prologue;
  return {
    sences
  };
}

PrologueContainer.propTypes = propTypes;

export default connect(mapStateToProps)(PrologueContainer);