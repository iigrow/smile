/*
 * @Author: star 
 * @Date: 2016-09-09 23:11:46 
 * @Last Modified by: star
 * @Last Modified time: 2016-09-11 00:40:04
 */

import '../../styles/components/authenticate/password.scss';

import React, {PropTypes} from 'react';
import SMSCaptcha from '../Captcha/SMSCaptcha';

/**
 * set or reset password
 * @export
 * @class Password
 * @extends {React.Component}
 */
export default class Password extends React.Component {
  constructor(props) {
    super(props);
    // 判断是否有手机号
    this.state = {
      tel: props.tel
    }
  }
  static propTypes = {
    tel: PropTypes.string,
    telError: PropTypes.string,
    captchaError: PropTypes.string
  }
  static defaultProps = {
    tel: '22',
    telError: '',
    captchaError: ''
  }
  // TODO: 通过红黄绿显示密码安全度级别  或者充能 级别
  // 找回密码 输入手机号 下一步 发送验证码 输入密码
  // 重置密码 发送验证码 输入密码
  onTelChange() {

  }
  next() {
    // TODO:判断手机号是否已注册 
  }
  resetPwd() {

  }
  render() {
    // 密码框通过渐变色 说明 难度等级
    return (
      <div className="password">
        <div className="mark">
          <img alt="safe"/>
        </div>
        { this.props.tel ?
          <div className="form">
            <div>
              <input className="left"  type="number"/>
              <SMSCaptcha tel={this.state.tel} auto={true}/>
            </div>
            <p>{this.props.captchaError}&nbsp; </p>
            <div>
              <input type="password" />
            </div>
            <p>{this.props.captchaError}&nbsp; </p>
            <div>
              <input type="button" value="完成" onClick={this.resetPwd.bind(this) } />
            </div>
          </div>
          :
          <div className="form">
            <div>
              <input type="number" onChange={this.onTelChange.bind(this) } />
            </div>
            <p>{this.props.telError}&nbsp; </p>
            <div>
              <input type="button" value="下一步" onClick={this.next.bind(this) } />
            </div>
          </div>
        }
      </div>
    );
  }
}