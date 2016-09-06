import React, { PropTypes } from 'react';

export default class Slider extends React.Component {
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
  static propTypes = {
    start: PropTypes.func,
    moving: PropTypes.func,
    stop: PropTypes.func,
  }
  getAngle(vector) {
    // 可优化
    if (vector.x === 0) {
      return vector.y > 0 ? Math.PI / 2 : 1.5 * Math.PI;
    }
    if (vector.y === 0) {
      return vector.x > 0 ? 0 : Math.PI;
    }
    if (vector.x > 0) {
      let angle = Math.atan(vector.y / vector.x);
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      return angle;
    } else {
      return Math.PI + Math.atan(vector.y / vector.x);
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
    let totalVector = { x: clientX - this.state.startPoint.x, y: this.state.startPoint.y - clientY };
    // 每隔3个点 记录一次位置
    if (this.state.count > 8) {
      this.setState({
        furthestPoint: {
          x: clientX,
          y: clientY
        },
        count: 0
      });
      this.props.moving && this.props.moving(
        this.getAngle({ x: clientX - this.state.furthestPoint.x, y: this.state.furthestPoint.y - clientY }),
        totalVector);
    } else {
      this.setState({
        count: this.state.count + 1
      })
    }
  }
  onTouchEnd(event) {
    let {clientX, clientY} = event.changedTouches[0];
    // x是原点减去起点 y是终点减去起点（y大值为负方向）
    let totalVector = { x: clientX - this.state.startPoint.x, y: this.state.startPoint.y - clientY };
    let immediateVector = { x: clientX - this.state.furthestPoint.x, y: this.state.furthestPoint.y - clientY };
    let immediateAngle = 0;
    // 临时移动距离不足10 则判定为未移动
    if (immediateVector.x > 20 || immediateVector.y > 20) {
      immediateAngle = this.getAngle(immediateVector);
    } else {
      immediateAngle = this.getAngle(totalVector);
    }
    this.props.stop && this.props.stop(
      immediateAngle,
      this.getAngle(totalVector),
      totalVector);
    this.setState({
      furthestPoint: {
        x: 0,
        y: 0
      },
      count: 0
    });
  }
  render() {
    return (
      <div className="slider" onTouchStart={this.onTouchStart.bind(this) } onTouchMove={this.onTouchMove.bind(this) } onTouchEnd={this.onTouchEnd.bind(this) }>
        {this.props.children}
      </div>
    );
  }
}
