/* 新功能说明 */

import React from 'react';

const propTypes = {

};

class Guide extends React.Component{
  constructor(props){
    super(props);
  }
  render () {
    this.props.guides.forEach();
    let all = <img />;
    return (
      <div>
        { all }
      </div>
    );
  }
}

export default Guide;