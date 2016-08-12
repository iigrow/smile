import React from 'react';
import {View, Text, Image, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

export default class Main extends React.Component{
  _onPress(){
    alert('press');
  }
  _onLongPress(){
    alert('long');
  }
  render(){
    return (
      <View>
        <Text>
          Hello world
        </Text>
        <TouchableHighlight onPress={this._onPress} onLongPress={this._onLongPress}>
          <Image source={require('../assets/imgs/img.jpg')}>
            <Text>smile world</Text>
          </Image>
        </TouchableHighlight>
        <TouchableNativeFeedback>
          <Image source={require('../assets/imgs/img.jpg')}>
            <Text>TouchableNativeFeedback</Text>
          </Image>
        </TouchableNativeFeedback>
        <TouchableOpacity>
          <Image source={require('../assets/imgs/img.jpg')}>
            <Text>TouchableOpacity</Text>
          </Image>          
        </TouchableOpacity>
        <TouchableWithoutFeedback>
          <Image source={require('../assets/imgs/img.jpg')}>
            <Text>TouchableWithoutFeedback</Text>
          </Image>         
        </TouchableWithoutFeedback>
      </View>
    );
  }
}