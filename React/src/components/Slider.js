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
  getAngle(vector) {
    // 可优化
    if (vector.x === 0) {
      return vector.y > 0 ? 0.5 : 1.5;
    }
    if (vector.y === 0) {
      return vector.x > 0 ? 0 : 1;
    }
    if (vector.x > 0) {
      return (2 + Math.atan(vector.y/vector.x)) % 2
    } else {
      return 1 + Math.atan(vector.y/vector.x);
    }
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
    let totalVector = { x: clientX - this.state.startPoint.x, y: clientY - this.state.startPoint.y };
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
        this.getAngle({ x: clientX - this.state.furthestPoint.x, y: clientY - this.state.furthestPoint.y }),
        totalVector);
    } else {
      this.setState({
        count: this.state.count + 1
      })
    }
  }
  onTouchEnd(event) {
    let {clientX, clientY} = event.changedTouches[0];
    let totalVector = { x: clientX - this.state.startPoint.x, y: clientY - this.state.startPoint.y };
    this.props.stop && this.props.stop(
      this.getAngle({ x: clientX - this.state.furthestPoint.x, y: clientY - this.state.furthestPoint.y }),
      this.getAngle(totalVector),
      totalVector);
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