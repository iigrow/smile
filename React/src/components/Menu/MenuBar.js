require('../../styles/components/menu/menu-bar.scss');

import React from 'react';
import { push } from 'react-router-redux';
import Button from '../Tag/Button';

class MenuBar extends React.Component{
  render () {
    return (
      <div className="menu-bar">
        <Button type="link" linkPath="/main/smile">
          <i className="ion-planet"></i>
          <span>爱笑</span>
        </Button>
        <Button type="link" linkPath="/main/mine">
          <i className="ion-social-instagram"></i>
          <span>笑一下</span>
        </Button>
        <Button type="link" linkPath="/main/user">
          <i className="ion-person"></i>
          <span>笑友</span>
        </Button>
        <Button type="link" linkPath="/main/user">
          <i className="ion-person"></i>
          <span>我的</span>
        </Button>
      </div>
    );
  }
}

export default MenuBar;