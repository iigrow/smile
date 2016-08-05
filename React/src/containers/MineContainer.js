import React, { Component } from 'react';

const propTypes = {

};

class MineContainer extends Component{
  render () {
    return (
      <div>
        mine
        {this.props.children}
      </div>
    );
  }
}

MineContainer.propTypes = propTypes;

export default MineContainer;