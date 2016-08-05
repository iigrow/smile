import React from 'react';
import Input from '../Tag/Input';
import Button from '../Tag/Button';

export default class Login extends React.Component{
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
