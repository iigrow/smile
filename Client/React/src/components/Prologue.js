require('../styles/components/prologue.scss');

import React from 'react';
import Button from './Form/Button';
import Slider from './Slider';

class Prologue extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedId: 0,
      count: this.props.sences.length,
      transform: 'translateX(0)'
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
  touchStart(){
    // TODO: 缩小选中的图片
  }
  touchMoving(vector, totalVector){
    // 移动
    let angle = this.getAngle(vector);
    if ( angle > Math.PI/2 && angle < 1.5*Math.PI) {
      // 左滑
      this.setState({
        transform: `translateX(${totalVector.x * (-1)}px)`
      });
    } else {
      // 右滑
      this.setState({
        transform: `translateX(${totalVector.x}px)`
      });
    }
  }
  touchStop(vector, totalVector){
    // 运动半径大于10则判断为移动
    if ( Math.sqrt(totalVector.x*totalVector.x + totalVector.y*totalVector.y) > 10) {
      // 元素归位
    }
    let totalAngle = (Math.atan(totalVector.y/totalVector.x) + 2) % 2;
    let angle =(Math.atan(vector.y/vector.x) + 2) % 2;
    // 夹角大于90deg即判定为 方向冲突
    if (Math.abs(totalAngle - angle) > Math.PI/2) {
      // TODO: 元素归位
    } else {
      let selectedId = this.state.selectedId;
      // 夹角在 90到270 则认为是向左滑动 整个元素左移
      if ( angle > Math.PI/2 && angle < 1.5*Math.PI) {
        // 不是最后一个元素
        if (selectedId < this.state.count-1) {
          // 移动元素
          // selectedId 元素左移动 隐藏 selectedId ++ 元素左移动出现
        }
      } else {
        // 不是第一个元素
        if ( selectedId > 0) {
          // selectedId 元素右移 隐藏 selectedId -- 右移出现
        }
      }
      this.setState({
        selectedId: selectedId
      });
    }
  }
  render () {
    return (
      <div className="prologue">
        <Slider start={this.touchStart.bind(this)} moving={this.touchMoving.bind(this)} stop={this.touchStop.bind(this)}>
          <div className="sences">
          { this.props.sences.map(value => {
            return <div className="sence" style={ {transform: this.state.transform }} key={value.id}><img src={value.img}/></div>;
          })}
          </div>
        </Slider>
      </div>
    );
  }
}

export default Prologue;