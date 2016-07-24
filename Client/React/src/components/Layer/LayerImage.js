import React, {PropTypes} from 'react';
import Screen from './Screen';
import Image from '../Tag/Image';

export default class LayerImage extends React.Component{
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    visible: false
  }
  render () {
    let imgStyle = this.props.width>this.props.height?{width: '100%'}: {height: '70%'}
    return (
      <Screen visible={this.props.visible}>
        <Image style={imgStyle} src={this.props.src} />
      </Screen>
    );
  }
}