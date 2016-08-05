require('../../styles/components/layer/screen.scss');

import React, {PropTypes} from 'react';

export default class Screen extends React.Component {
  static propTypes = {
    bgColor: PropTypes.string,
    clickCallback: PropTypes.func
  }
  static defaultProps = {
    bgColor: 'rgba(0, 0, 0, 1)'
  }
  onClick() {
    this.props.clickCallback && this.props.clickCallback();
  }
  render() {
    return <div className="screen" style={{backgroundColor: this.props.bgColor}} onClick={this.onClick.bind(this)} >{this.props.children}</div>;
  }
}
