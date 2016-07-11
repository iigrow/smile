import React from 'react';

class Slider extends React.Component{
  constructor(props){
    super(props)
    this.state={
      startPoint: {
        x: 0,
        y: 0
      },
      furthestPoint: {
        x: 0,
        y: 0
      }
    };
  }
  onTouchStart(event){
    this.setState({
      startPoint: {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      },
      furthestPoint: {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
    });
  }
  onTouchMove(event){
    // 处理先左滑动一段距离后右滑动的情况
    // 趋远  趋近
    let displacement = {
      dsx: this.state.startPoint.x - event.touches[0].clientX,
      dsy: this.state.startPoint.y - event.touches[0].clientY
    };
    // if ( event.touches[0].clientX < this.state.furthestPoint.x)
    // 最终目的是拿到准确的方向
  }
  onTouchEnd(event){
    // 不用纪录endPoint
    let displacement = {
      dsx: this.state.startPoint.x - event.touches[0].clientX,
      dsy: this.state.startPoint.y - event.touches[0].clientY
    };
    // 判断在合适的距离范围内 认为已经移动了 就执行对应的操作
  }
  render () {
    return (
      <div className="slider" onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
        {this.props.children}
      </div>
    );
  }
}

export default Slider;