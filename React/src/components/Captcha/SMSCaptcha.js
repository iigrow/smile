/*
 * @Author: star 
 * @Date: 2016-09-05 16:39:47 
 * @Last Modified by: star
 * @Last Modified time: 2016-09-06 23:24:21
 */

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as captcha from '../../actions/captcha';
import { setTelError } from '../../actions/login';
import { SET_TELERROR } from '../../constants/ActionTypes';

/**
 * send sms to specify tel-number
 * @class SMSCaptcha
 * @extends {React.Component}
 */
class SMSCaptcha extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    tel: PropTypes.string
  }
  static defaultProps = {
    tel: null
  }
  state = {
    interval: 50
  }
  getCaptcha() {
    if (this.state.interval !== 50) {
      return;
    }
    if (this.checkTel()) {
      this.props.getSMSCaptcha(this.props.tel, data => {
        if (!data) {
          this.setState({ interval: --this.state.interval });
        } else {
          this.props.setTelError(data.errMsg)
        }
      });
    }
  }
  checkTel() {
    let errMsg = null;
    if (!this.props.tel) {
      errMsg = '请输入手机号码';
    }
    if (!/^\d{11}$/.test(this.props.tel)) {
      errMsg = '请输入正确的手机号码';
    }
    if (errMsg) {
      this.props.setTelError(errMsg);
      return false;
    }
    return true;
  }
  render() {
    if (this.state.interval !== 50) {
      if (this.state.interval > 0) {
        setTimeout(() => {
          this.setState({ interval: --this.state.interval });
        }, 1000);
      } else {
        setTimeout(() => {
          this.setState({ interval: 50 });
        }, 0);
      }
    }
    return this.state.interval == 50 ?
      <span onClick={this.getCaptcha.bind(this) }>获取验证码</span> : <span>{`重新发送(${this.state.interval}s)`}</span>;
  }
}

export default connect(null, dispatch => {
  return bindActionCreators(Object.assign({ setTelError }, captcha), dispatch)
})(SMSCaptcha);