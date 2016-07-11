require('../styles/components/prologue.scss');

import React from 'react';
import Button from './Form/Button';

class Prologue extends React.Component{
  render () {
    return (
      <div class="prologue">
        { this.props.sences.map(value => {
          return <div class="sence" key={value.id}><img src={value.img} /></div>;
        })}
        <div>sdfsdfsdfsdf</div>
        <div>
        </div>
      </div>
    );
  }
}

export default Prologue;