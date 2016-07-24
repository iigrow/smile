import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Smile from '../components/Smile';

import * as smile from '../actions/smile';

class SmileContainer extends Component{
  render () {
    return <Smile {...this.props} />
  }
}

function mapStateToProps(state){
  const { smile } = state;
  const { smileImages,memoirsImages,mostBeautiful } = smile;
  return {
    smileImages,
    memoirsImages,
    mostBeautiful
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(smile, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SmileContainer);