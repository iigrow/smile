/*
 * @Author: star 
 * @Date: 2016-10-10 20:21:12 
 * @Last Modified by:   star 
 * @Last Modified time: 2016-10-10 20:21:12 
 */

import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Prologue from '../components/Prologue';

import * as prologue from '../actions/prologue';

class PrologueContainer extends React.Component {
  render() {
    return <Prologue {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { prologue } = state;
  const { sences } = prologue;
  return { sences };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(prologue, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrologueContainer);