require('../styles/components/navigation-bar.scss');
import React, { Component } from 'react';

export default class NavigationBar extends Component {
  back() {
    // history.goBack();
  }
  close() {
    // 回到上一个主路由
  }
  more() {
    // TODO: 弹出功能菜单 包括分享微信 分享到QQ 复制链接 等 
  }
  render() {
    return (
      <div className="navigation-bar">
        <i className="ion-chevron-left left" onClick={this.back.bind(this) }></i>
        <i className="ion-close-round right" onClick={this.close.bind(this) }></i>
        <i className="ion-android-more-vertical right" onClick={this.more.bind(this) }></i>
      </div>
    );
  }
}
