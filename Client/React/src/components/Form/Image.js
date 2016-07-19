import React from 'react';

class Image extends React.Component{
  static defaultProps = {
    src: '',
    alt: ''
  }
  state = {
    touchEnd: true,
    tapTimeoutHandler: null,
    longTapTimeoutHandler: null
  }
  onTouchStart () {
    this.setState({
      touchEnd: false,
      tapTimeoutHandler: setTimeout(()=>{
        if(this.state.touchEnd) {
          // 触摸已经结束 可以触发事件
        }
      }, 300),
      longTapTimeoutHandler: setTimeout(()=>{
        
      }, 600)
    });
  }
  onTouchEnd () {
    clearTimeout(this.state.tapTimeoutHandler);
    clearTimeout(this.state.longTapTimeoutHandler);
    this.setState({
      tapTimeoutHandler: null,
      longTapTimeoutHandler: null
    })
  }
  render () {
    return <img src="" alt=""/>;
  }
}

export default Image;