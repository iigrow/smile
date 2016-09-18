/*
 * @Author: star 
 * @Date: 2016-09-05 15:25:37 
 * @Last Modified by: star
 * @Last Modified time: 2016-09-11 00:36:48
 */

import '../../styles/components/authenticate/account.scss';

import React, {PropTypes} from 'react';
import SMSCaptcha from '../Captcha/SMSCaptcha';

/**
 * Account component
 * @export
 * @class Account
 * @extends {React.Component}
 */
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    const {actions} = props;
    const { getOauthList } = actions;
    getOauthList();
  }
  static propTypes = {
    oauthList: PropTypes.array
  }
  static defaultProps = {
    oauthList: []
  }
  state = {
    login: false,
  }
  retrievePwd() {
    retrievePwd();
  }
  swithEntry() {
    this.setState({ login: !this.state.login });
    this.clearTelError();
    this.clearCaptchaError();
    this.clearPwdError();
  }
  clearTelError() {
    this.props.actions.setTelError(null);
  }
  clearPwdError() {
    this.props.actions.setPwdError(null);
  }
  clearCaptchaError() {
    this.props.actions.setCaptchaError(null);
  }
  onTelChange(evt) {
    this.setState({ tel: evt.value })
  }
  onPwdChange(evt) {
    this.setState({ pwd: evt.value })
  }
  onCpatchaChange(evt) {
    this.setState({ captcha: evt.value })
  }
  submit() {
    // 帐号是否已注册 
    // 登录账号密码错误
  }
  render() {
    return (
      <div className="login">
        <div className="header">
          <p>加入我们</p>
          <p>拥有微笑</p>
          <p>分享微笑</p>
          <p>让生命焕发灿烂之光</p>
        </div>
        <div className="form">
          <div className={this.props.telError ? 'error' : ''}>
            <input type="number" placeholder="手机号" onFocus={this.clearTelError.bind(this) } onChange={this.onTelChange.bind(this) }/>
          </div>
          <p>{this.props.telError}&nbsp; </p>
          { this.state.login ?
            <div className={this.props.pwdError ? 'error' : ''}>
              <input className="left" type="password" placeholder="密码" onFocus={this.clearPwdError.bind(this) } onChange={this.onPwdChange.bind(this) }/>
              <span onClick={this.retrievePwd.bind(this) }>找回密码&nbsp; &nbsp; </span>
            </div>
            :
            <div className={this.props.captchaError ? 'error' : ''}>
              <input className="left" type="number" placeholder="验证码" onFocus={this.clearCaptchaError.bind(this) } onChange={this.onCpatchaChange.bind(this) }/>
              <SMSCaptcha tel={this.state.tel}/>
            </div>
          }
          <p>{this.state.login ? this.props.pwdError : this.props.captchaError}&nbsp; </p>
          <div>
            <input type="button" value="笑一下" onClick={this.submit.bind(this) }/>
          </div>
        </div>
        <p className="entry" onClick={this.swithEntry.bind(this) }>{this.state.login ? '帐号密码登录' : '注册帐号'}</p>
        <div className="more">
          <hr className="left"/>
          <span>更多登录方式</span>
          <hr className="right"/>
        </div>
        <div className="oauth">
          {this.props.oauthList.map((value, index) => {
            return <a key={index} href={value.href} style={{ backgroundImage: `url(${value.logoUrl})` }}></a>
          }) }
        </div>
      </div>
    );
  }
}
