require('../../styles/components/layer/screen.scss');

import React, {PropTypes} from 'react';

class Screen extends React.Component {
  static propTypes = {
    bgColor: PropTypes.string,
    visible: PropTypes.boolean
  }
  static defaultProps = {
    bgColor: 'rgba(0, 0, 0, 1)',
    visible: false
  }
  render() {
    let divStyle = {
      backgroundColor: this.props.bgColor,
      display: this.props.visible ? 'block' : 'none'
    }
    return <div className="screen" style={divStyle} >{this.props.children}</div>;
  }
}

export default Screen;