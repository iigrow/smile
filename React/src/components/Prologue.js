require('../styles/components/prologue.scss');

import React from 'react';
import Button from './Tag/Button';
import Slider from './Slider';
import Progress from './Tag/Progress';

class Prologue extends React.Component {
  constructor(props) {
    super(props);
    const { actions } = props;
    const {fetchPrologueInfo} = actions;
    fetchPrologueInfo();
  }
  state = {
    index: 0
  }
  moveSence() {

  }
  touchStart() {
    // TODO: 缩小选中的图片
  }
  touchMoving(angle, totalVector) {
    // 左右或者上下移动时直接用 x 或者y 就可以 其他时候可以用angle
  }
  touchStop(angle, totalAngle, totalVector) {
    // 运动半径大于10则判断为移动 夹角大于180deg即判定为 方向冲突
    let index = this.state.index;
    if (Math.sqrt(totalVector.x * totalVector.x + totalVector.y * totalVector.y) > 5 &&
      Math.abs(totalAngle - angle) < Math.PI ) {
      // 夹角在 90到270 则认为是向左滑动 整个元素左移
      let isLeft = angle > Math.PI / 2 && angle < 1.5 * Math.PI;
      this.switchSence(isLeft);
      return;
    }
  }
  switchSence(left) {
    let currentIndex = this.state.index + (left ? 1 : -1);
    if (currentIndex >= 0) {
      if (currentIndex >= this.props.sences.length) {
        // 最后一张 TODO:跳转进入主页
      } else {
        this.setState({ index: currentIndex });
      }
    }
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
            { this.props.sences.map((value, index) => {
              let className = '';
              if (index > this.state.index) {
                className = 'right';
              } else if (index === this.state.index) {
                className = 'center';
              } else {
                className = 'left';
              }
              return <div className={'sence ' + className} key={index}><img draggable="false" style={{ height: '100%', width: '100%' }} src={value}/></div>;
            }) }
          </div>
        </Slider>
        <Progress count={this.props.sences.length} index={this.state.index} style={{ position: 'absolute', top: '90%' }}/>
        <div className="btn-bottom">
          <Button {...btnLogin}/>
          <Button {...btnRegister}/>
        </div>
      </div>
    );
  }
}

export default Prologue;