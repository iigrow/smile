require('../../styles/components/layer/dialog.scss');

import React, {PropTypes} from 'react';
import Screen from './Screen';
import Button from '../Tag/Button';

class Dialog extends React.Component{
  static propTypes = {
    buttons: PropTypes.array
  }
  static defaultProps = {
    buttons: []
  }
  render (){
    return (
      <Screen bgColor="rgba(0,0,0,.7)">
        <div className="dialog">
          <div className="title"></div>
          <div className="content">{this.props.children}</div>
          <div className="btn"></div>
        </div>
      </Screen>
    )
  }
}

export default Dialog;