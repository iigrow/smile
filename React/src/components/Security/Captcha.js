import React from 'react';

export default class Captcha extends React.Component {
  state = {
    interval: 50
  }
  getCaptcha() {
    // const {getCaptcha} = this.props.actions;
    this.setState({ interval: --this.state.interval });
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