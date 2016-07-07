import { Component } from 'react';
import Button from '../Form/Button';
import Input from '../Form/Input';

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