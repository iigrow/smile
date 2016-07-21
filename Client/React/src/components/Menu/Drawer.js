require('../../styles/components/menu/drawer.scss');

import React from 'react';

class Drawer extends React.Component {
  render() {
      return (
      <div className="drawer">
        {this.props.children}
      </div>
    );
  }
}

export default Drawer;  