import React from 'react';

class Input extends React.Component {
  render () {
    return (
      <div>
        <input {...this.props}/>
        <span className="icon-clear"></span>
        { this.props.type === 'password' ? <span className="icon-eye"></span> : ''}
      </div>
    );
  }
}

export default Input;