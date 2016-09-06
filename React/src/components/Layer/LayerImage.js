import React, {PropTypes} from 'react';
import Screen from './Screen';
import Image from '../Tag/Image';
import Dialog from './Dialog';
import Button from '../Tag/Button';

export default class LayerImage extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    clickCallback: PropTypes.func
  }
  state = {
    touchEnd: true,
    startPoint: null,
    endPoint: null,
    longTapHandle: null,
    showDialog: false
  }
  _calcDistance(start, end) {
    return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
  }
  onTouchStart(event) {
    const {clientX, clientY} = event.changedTouches[0];
    this.setState({
      touchEnd: false,
      startPoint: { x: clientX, y: clientY },
      longTapHandle: setTimeout(() => {
        if (!this.state.touchEnd) {
          if (!this.state.endPoint || this._calcDistance(this.state.startPoint, this.state.endPoint) < 10) {
            this.showDialog();
          }
        }
      }, 700)
    });
  }
  onTouchMove(event) {
    const {clientX, clientY} = event.changedTouches[0];
    this.setState({
      endPoint: { x: clientX, y: clientY }
    })
  }
  onTouchCancel(event) {
    this.setState({
      touchEnd: true,
      startPoint: null,
      endPoint: null
    })
    this.state.longTapHandle && clearTimeout(this.state.longTapHandle);
  }
  onTouchEnd(event) {
    const {clientX, clientY} = event.changedTouches[0];
    this.setState({
      state: true,
      endPoint: { x: clientX, y: clientY }
    })
    this.state.longTapHandle && clearTimeout(this.state.longTapHandle);
  }
  collectImg() {
    this.hideDialog();
  }
  reportImg() {
    this.hideDialog();
  }
  cancel() {
    this.hideDialog();
  }
  showDialog() {
    this.setState({
      showDialog: true
    });
  }
  hideDialog() {
    this.setState({
      showDialog: false
    });
  }
  render() {
    let imgStyle = this.props.width > this.props.height ? { width: '100%' } : { height: '70%' }
    return (
      <div>
        <Screen clickCallback={this.props.clickCallback} >
          <Image style={imgStyle} src={this.props.src} onTouchStart={this.onTouchStart.bind(this) } onTouchMove={this.onTouchMove.bind(this) } onTouchCancel={this.onTouchCancel.bind(this) } onTouchEnd={this.onTouchEnd.bind(this) } />
        </Screen>
        {
          this.state.showDialog ?
            <Dialog>
              <Button type="div" text="收藏" onClick={this.collectImg.bind(this) } />
              <Button type="div" text="举报" onClick={this.reportImg.bind(this) } />
              <Button type="div" text="取消" onClick={this.cancel.bind(this)} />
            </Dialog>
            : null
        }
      </div>
    );
  }
}