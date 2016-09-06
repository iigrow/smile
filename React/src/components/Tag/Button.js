require('../../styles/components/tag/button.scss');

import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class Button extends Component{
  static propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    linkPath: PropTypes.string,
    style: PropTypes.object
  }
  static defaultProps = {
    type: 'a',
    text: 'button',
    linkPath: '/'
  }
  render () {
    let content = this.props.children ? this.props.children : this.props.text;
    let otherProp = {
      style : this.props.style,
      onClick: this.props.onClick
    }
    switch(this.props.type){
      case 'button': return <button className="button button-button" type="button" value={this.props.text} {...otherProp}/>;
      case 'input': return <input className="button button-input" type="button" value={this.props.text} {...otherProp}/>;
      case 'div': return <div className="button button-div" {...otherProp}>{ content }</div>
      case 'link': return <Link className="button button-a" to={this.props.linkPath} {...otherProp}>{ content }</Link>;
      default : return <a className="button button-a" href="javascript:void(0)" {...otherProp}>{ content }</a>;
    }
  }
}

export default Button;