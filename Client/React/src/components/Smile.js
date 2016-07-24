require('../styles/components/smile.scss');

import React, {PropTypes} from 'react';
import Image from './Tag/Image';
import LayerImage from './Layer/LayerImage';

export default class Smile extends React.Component {
  constructor(props) {
    super(props);
    const { fetchSmileImages, fetchMemoriesImages, fetchMostBeautifulImage } = props.actions;
    fetchSmileImages();
    fetchMemoriesImages();
    fetchMostBeautifulImage();
    // // 光感
    // window.addEventListener('devicelight', event=>{
    //   this.setState({devicelight: event.value});
    // });
    // // 电池
    // navigator.getBattery().then(battery=>{
    //   this.setState({batteryLevel: battery.level})
    //   battery.addEventListener('chargingchange',()=>{
    //     console.log('chargingchange');
    //   });
    //   // levelchange
    //   // chargingtimechange
    //   // dischargingtimechange
    // });
    // navigator.geolocation.getCurrentPosition(position=>{
    //   this.setState({position: position.coords.latitude});
    // });
    // let watchID = navigator.geolocation.watchPosition(position=>{
    //   this.setState({position: position.coords.latitude});
    // });
    // // navigator.geolocation.clearWatch(watchID);
  }
  static propTypes = {
    mostBeautiful: PropTypes.object,
    memoirsImages: PropTypes.array,
    smileImages: PropTypes.array
  }
  minIndex(arrData) {
    let index = 0;
    let minHeight = arrData[0].height;
    let length = arrData.length;
    for (let i = 1; i < length; i++) {
      if (minHeight > arrData[i].height) {
        minHeight = arrData[i].height;
        index = i
      }
    }
    return index;
  }
  calLayer(imgData, colCount) {
    let result = [];
    for (let i = 0; i < colCount; i++) {
      result.push({
        height: 0,
        imgs: []
      })
    }
    imgData.forEach((value, index) => {
      let min = this.minIndex(result);
      result[min].height += (value.height / value.width) * 1000; // 1000为等比例缩放定宽
      result[min].imgs.push(value);
    })
    return result.map(value => {
      return value.imgs;
    })
  }
  showLayerImag(){

  }
  render() {
    let imgColCount = 3;
    let smileImgProp = {
      referrerpolicy: 'no-referrer'
    };
    // 高度固定
    let memoryImgProp = {
      height: '100%'
    };
    let memorisWrapWidth = 0;
    this.props.memoirsImages.forEach(value=>{
      memorisWrapWidth += value.width/value.height;
    })
    memorisWrapWidth *= 3;
    // TODO: 滚动图片按需加载
    let smileImages = this.calLayer(this.props.smileImages, imgColCount);
    let layerImage = {
      src: 'http://f.hiphotos.baidu.com/image/h%3D200/sign=0d1935de229759ee555067cb82f9434e/902397dda144ad345c61d654d4a20cf430ad8502.jpg',
      width: 610,
      height: 909
    };
    return (
      <div className="smile">
      <div></div>

        <div className="mostbeautiful">
          <div>左侧占据2rem</div>
          <div className="beautiful-img"><Image src={this.props.mostBeautiful ? this.props.mostBeautiful.src : ''}/></div>
          <div>右侧占据2rem</div>
        </div>
        <div>往日最美</div>
        <div className="memoris">
          <div style={{width: memorisWrapWidth + 'rem'}}>
          {this.props.memoirsImages.map((value, index) => {
            return <Image src={value.src} key={index} {...memoryImgProp} />
          }) }
          </div>
        </div>
        <div>笑一下</div>
        <div className="all-smile">
          {smileImages.map((value, index) => {
            return <div key={`col_${index}`} style={{ width: (100 / imgColCount) + '%' }} >
              {value.map((subValue, subIndex) => {
                return <Image src={subValue.src} key={subIndex} {...smileImgProp} />
              }) }
            </div>;
          }) }
        </div>
        <LayerImage {...layerImage}/>
      </div>
    );
  }
}