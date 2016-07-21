import React, { Component } from 'react';
import Image from '../components/Tag/Image';
import Screen from '../components/Layer/Screen';
import Dialog from '../components/Layer/Dialog';

class SmileContainer extends Component{
  render () {
    return (
      <div>
        <div>顶部</div>
        <div>今日最美</div>
        <div>3列 按照大小顺序排 可自定义列数</div>
        <div>点击照片放大 底部弹出菜单栏 是否保存照片等等  </div>
        <Dialog/>
      </div>
    );
  }
}

export default SmileContainer;