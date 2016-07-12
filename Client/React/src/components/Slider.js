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
      },
      count: 0,
      weight: 3,
      range: 10
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
    console.log(event)
    let _x = event.touches[0].clientX;
    let _y = event.touches[0].clientY;
    if (this.state.count > weight) {
      dsx = this.state.furthestPoint.x - _x;
      dsy = this.state.furthestPoint.y - _y;
      // 滑动的方向角度
      let angle = 2 + Math.atan(dsy/dsx) % 2;
      this.setState({
        furthestPoint: {
          x: _x,
          y: _y
        },
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count + 1
      })
    }
  }
  onTouchEnd(event){
    console.log(event)
    let dsx = this.state.furthestPoint.x - event.touches[0].clientX;
    let dsy = this.state.furthestPoint.y - event.touches[0].clientY;
    // 滑动的方向角度
    let angle = 2 + Math.atan(dsy/dsx) % 2;
    // 滑动距离🈶️效
    if (dsx > this.state.rang || dsy > this.state.rang) {
      // TODO: to do something
    }
  }
  render () {
    return (
      <div className="slider" onTouchStart={this.onTouchStart.bind(this)} onTouchMove={this.onTouchMove.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}

export default Slider;