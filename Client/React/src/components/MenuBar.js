require('../styles/components/menu-bar.scss');

import React from 'react';

class MenuBar extends React.Component{
  render () {
    return (
      <div className="menu-bar">
        <div>
          <i className="ion-planet"></i>
          <span>smile</span>
        </div>
        <div>
          <i className="ion-social-instagram"></i>
          <span>mine</span>
        </div>
        <div>
          <i className="ion-person"></i>
          <span>user</span>
        </div>
      </div>
    );
  }
}

export default MenuBar;