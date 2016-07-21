require('../../styles/components/layer/screen.scss');

import React, {PropTypes} from 'react';

class Screen extends React.Component{
  static propTypes = {
    bgColor: PropTypes.string
  }
  static defaultProps = {
    bgColor: 'rgba(0, 0, 0, 1)'
  }
  render () {
    return <div className="screen" style={{backgroundColor: this.props.bgColor}}>{this.props.children}</div>;
  }
}

export default Screen;