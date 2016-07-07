import { Component } from 'react';

const propTypes = {
  type:'a'
};

class Button extends Component{
  render () {
    switch(this.props.type){
      case 'button': return <button type="button" value=""/>;
      case 'input': return <input type="button" value="" />;
      case 'div': return <div>button</div>
      default : return <a href="javascript:void(0)"></a>;
    }
  }
}

Button.propTypes = propTypes;

export default Button;