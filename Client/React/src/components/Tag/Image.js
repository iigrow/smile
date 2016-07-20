import React, { PropTypes } from 'react';

class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    tapCallback: PropTypes.func,
    longTapCallback: PropTypes.func
  }
  state = {
    touchEnd: true
  }
  onTouchStart() {
    this.setState({ touchEnd: false });
    let tapTimeoutHandler = setTimeout(() => {
      // 触摸已经结束 可以触发事件
      if (this.state.touchEnd) {
        this.props.tapCallback(this.props.src);
      }
      clearTimeout(tapTimeoutHandler);
    }, 300);
    let longTapTimeoutHandler = setTimeout(() => {
      if (!this.state.touchEnd) {
        this.props.longTapCallback(this.props.src);
      }
      clearTimeout(longTapTimeoutHandler);
    }, 700);
  }
  onTouchEnd() {
    this.setState({ touchEnd: true });
  }
  render() {
    const {src, alt, className} = this.props;
    return <img onTouchStart={this.onTouchStart.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)} src={src} alt={alt} className={className} />;
  }
}

export default Image;