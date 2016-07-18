import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';

class Login extends React.Component{
  render () {
    let accountInfo = {
      type: 'text',
      placeholder: '请输入帐号'
    };
    let passwordInfo = {
      type: 'password',
      placeholder: '请输入密码'
    }
    return (
      <div>
        <Input {...accountInfo} />
        <Input {...passwordInfo} />
        <Button />
      </div>
    );
  }
}

export default Login;