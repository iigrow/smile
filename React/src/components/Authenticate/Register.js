import '../../styles/components/authenticate/register.scss';

import { Component } from 'react';
import Button from '../Tag/Button';
import Input from '../Tag/Input';

export default class Register extends Component{
  render () {
    return (
      <div className="register">
        <Input />
        <Button /> 
      </div>
    );
  }
}
