require('../../styles/components/menu/nav-tabs.scss');

import React, {PropTypes} from 'react';

export default class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentItem: props.tabs[0]
    }
  }
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    cached: PropTypes.bool
  }
  static defaultProps = {
    cached: true
  }
  switchTab(index) {
    let item = this.props.tabs[index];

    if (this.props.cached) {
      this.setState({
        index: index
      })
    } else {
      this.setState({
        index: index,
        currentItem: item
      })
    }

    // trigger the specify callback
    item.callback && item.callback();
  }
  _onClick(index) {
    this.switchTab(index);
  }
  render() {
    let navTitleStyle = { width: 100 / this.props.tabs.length - 2 + '%' }
    return (
      <div className="nav-tabs">
        <div className="nav-tabs-title">
          {
            this.props.tabs.map((value, index) => {
              let className = index === this.state.index ? 'selected' : ''
              return <div key={index} onClick={this._onClick.bind(this, index) } className={ className }>{value.title}</div>
            })
          }
        </div>
        {
          this.props.cached ?
            this.props.tabs.map((value, index) => {
              let className = index === this.state.index ? 'selected' : 'no-selected'
              return <div className={'nav-tabs-content ' + className} key={index}>{value.content}</div>
            }) :
            <div className="nav-tabs-content selected">{this.state.currentItem.content}</div>
        }
      </div>
    );
  }
}