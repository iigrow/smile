import React from 'react';
import Input from '../Tag/Input';
import Button from '../Tag/Button';

export default class Login extends React.Component {
  authWeixin() {
    let appID = '';
    let redirectUri = encodeURIComponent('http://www.smilplex.com/api/auth/token/weixin');
    let scope = 'snsapi_userinfo'; // snsapi_base(只能获取openid) 
    let state = ''; // a-zA-Z0-9 最多128字节
    let authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    location.assign(authUrl);
  }
  render() {
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
        <a href="">微信授权</a>
      </div>
    );
  }
}
