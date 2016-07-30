require('../../styles/components/menu/drawer.scss');

import React from 'react';

export default class Drawer extends React.Component {
  render() {
      return (
      <div className="drawer">
        {this.props.children}
      </div>
    );
  }
}
