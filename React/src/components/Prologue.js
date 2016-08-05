require('../styles/components/prologue.scss');

import React from 'react';
import Button from './Tag/Button';
import Slider from './Slider';

class Prologue extends React.Component {
  constructor(props) {
    super(props);
    let selectedId = this.props.sences[0].id;
    let sences = new Map();
    this.props.sences.forEach(value => {
      value.style = {transform: 'translateX(100%)'};
      sences.set(value.id, value);
    })
    let defaultSence = sences.get(selectedId);
    defaultSence.style = {transform: 'translateX(0)'};
    defaultSence.style = {left: 0};
    sences.set(selectedId, defaultSence);
    this.state = {
      selectedId: selectedId,
      sences: sences
    };
  }
  moveSence () {

  }
  touchStart() {
    // TODO: 缩小选中的图片
  }
  touchMoving(angle, totalVector) {
    // 左右或者上下移动时直接用 x 或者y 就可以 其他时候可以用angle
    let sences = this.state.sences;
    let currentSence = sences.get(this.state.selectedId);
    currentSence.style = { transform: `translateX(${totalVector.x}px)` };
    sences.set(this.state.selectedId, currentSence);
    this.setState({
      sences: sences
    });
  }
  touchStop(angle, totalAngle, totalVector) {
    // 运动半径大于10则判断为移动 夹角大于90deg即判定为 方向冲突
    let selectedId = this.state.selectedId;
    if (Math.sqrt(totalVector.x * totalVector.x + totalVector.y * totalVector.y) > 10 ||
      Math.abs(totalAngle - angle) > Math.PI / 2) {
      // 夹角在 90到270 则认为是向左滑动 整个元素左移
      let direction = (angle > Math.PI / 2 && angle < 1.5 * Math.PI) ? -1 : 1;
      let nextId = selectedId - direction;
      // 不是边界元素
      if (nextId >= 0 && nextId < this.props.sences.length) {
        // 应该使用setState方法去做
        let sences = this.state.sences;
        let currentSence = sences.get(selectedId);
        currentSence.style = { transform: 'translateX(-100%)' };
        sences.set(this.state.selectedId, currentSence);
        currentSence = sences.get(nextId);
        currentSence.style = { transform: 'translateX(0)' };
        sences.set(nextId, currentSence);
        this.setState({
          sences: sences,
          selectedId: nextId
        });
        return;
      }
    }
    let sences = this.state.sences;
    let currentSence = sences.get(selectedId);
    currentSence.style = {transform: 'translateX(0)'};
    sences.set(selectedId, currentSence);
    this.setState({
      sences: sences
    });
  }
  render() {
    let btnLogin = {
      type: 'link',
      text: '登录',
      linkPath: 'login'
    };
    let btnRegister = {
      type: 'link',
      text: '注册',
      linkPath: '/register'
    };
    return (
      <div className="prologue">
        <Slider start={this.touchStart.bind(this) } moving={this.touchMoving.bind(this) } stop={this.touchStop.bind(this) }>
          <div className="sences">
            { this.props.sences.map(value => {
              return <div className="sence" style={value.style} key={value.id}><img src={value.img}/></div>;
            }) }
          </div>
        </Slider>
        <div className="btn-bottom">
          <Button {...btnLogin}/>
          <Button {...btnRegister}/>
        </div>
      </div>
    );
  }
}

export default Prologue;