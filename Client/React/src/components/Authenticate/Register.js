import { Component } from 'react';
import Button from '../Tag/Button';
import Input from '../Tag/Input';

const propTypes = {

};

class Register extends Component{
  render () {
    return (
      <div>
        <Input />
        <Button /> 
      </div>
    );
  }
}

Register.propTypes = propTypes;

export default Register;