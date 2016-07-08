require('../styles/components/menu-bar.scss');

import React from 'react';

class MenuBar extends React.Component{
  render () {
    return (
      <div className="menu-bar">
        <div>smile</div>
        <div>mine</div>
        <div>user</div>
      </div>
    );
  }
}

export default MenuBar;