import React, { PropTypes } from 'react';

class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    clickCallback: PropTypes.func
  }
  onClick() {
    const { src, width, height } = this.props;
    this.props.clickCallback && this.props.clickCallback({
      src, width, height
    });
  }
  render() {
    const {clickCallback, width, height, ...otherProps} = this.props;
    return <img onClick={this.onClick.bind(this) } {...otherProps}/>;
  }
}

export default Image;