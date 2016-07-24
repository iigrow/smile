import React, { PropTypes } from 'react';

class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
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
      // 判断移动距离 如果移动距离小于某个范围 则判为点击 否则为移动
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
    return <img onTouchStart={this.onTouchStart.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)} {...this.props}/>;
  }
}

export default Image;