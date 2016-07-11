require('../styles/components/prologue.scss');

import React from 'react';
import Button from './Form/Button';
import Slider from './Slider';

class Prologue extends React.Component{
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="prologue">
        { this.props.sences.map(value => {
          return <div className="sence" key={value.id}><img src={value.img} /></div>;
        })}
        <Slider />
      </div>
    );
  }
}

export default Prologue;