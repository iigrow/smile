require('../../styles/components/tag/progress.scss');

import React, {PropTypes} from 'react';

export default class Progress extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    count: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    style: PropTypes.object
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.index !== this.props.index || nextProps.count !== this.props.count
  }
  render() {
    let progressStyle = Object.assign({ width: 2 * this.props.count + 'em' }, this.props.style);
    let content = [];
    for (let i = 0; i < this.props.count; i++) {
      content.push(<li key={i} className={i == this.props.index ? 'selected' : null}></li>)
    }
    return (
      <div className="progress" style={progressStyle}>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}