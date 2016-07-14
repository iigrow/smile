import React, { PropTypes } from 'react';

const propTypes = {
  start: PropTypes.func,
  moving: PropTypes.func,
  stop: PropTypes.func,
};

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startPoint: {
        x: 0,
        y: 0
      },
      furthestPoint: {
        x: 0,
        y: 0
      },
      count: 0
    };
  }
  onTouchStart(event) {
    let {clientX, clientY} = event.changedTouches[0];
    this.setState({
      startPoint: {
        x: clientX,
        y: clientY
      },
      furthestPoint: {
        x: clientX,
        y: clientY
      }
    });
    this.props.start && this.props.start();
  }
  onTouchMove(event) {
    let {clientX, clientY} = event.changedTouches[0];
    // 每隔3个点 记录一次位置
    if (this.state.count > 3) {
      this.setState({
        furthestPoint: {
          x: clientX,
          y: clientY
        },
        count: 0
      });
      this.props.moving && this.props.moving(
        { x: clientX - this.state.furthestPoint.x, y: clientY - this.state.furthestPoint.y },
        { x: clientX - this.state.startPoint.x, y: clientY - this.state.startPoint.y });
    } else {
      this.setState({
        count: this.state.count + 1
      })
    }
  }
  onTouchEnd(event) {
    let {clientX, clientY} = event.changedTouches[0];
    this.props.stop && this.props.stop(
      { x: clientX - this.state.furthestPoint.x, y: clientY - this.state.furthestPoint.y },
      { x: clientX - this.state.startPoint.x, y: clientY - this.state.startPoint.y });
  }
  render() {
    return (
      <div className="slider" onTouchStart={this.onTouchStart.bind(this) } onTouchMove={this.onTouchMove.bind(this) } onTouchEnd={this.onTouchEnd.bind(this) }>
        {this.props.children}
      </div>
    );
  }
}

Slider.propTypes = propTypes;

export default Slider;