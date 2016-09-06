require('../styles/components/mine.scss');

import React from 'react';
import NavTabs from './Menu/NavTabs';
import Image from './Tag/Image';
// import WX from '../lib/weixin';

export default class Mine extends React.Component {
  render() {
    let tabs = [
      { title: '拍照', content: <Image src="/assets/img/pic_005.jpg"/>, callback: () => {
       } },
      { title: '我的', content: <Image src="/assets/img/pic_006.jpg"/>, callback: () => { 
      } },
      { title: '我的', content: <Image src="/assets/img/pic_007.jpg"/>, callback: () => { 
      } }
    ];
    return (
      <section>
        <NavTabs tabs={tabs}/>
      </section>
    );
  }
}