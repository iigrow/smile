// appsecret
// e004d29ef9396e8bdbacad99e276a83c

// 在服务器获取图片 http://file.api.weixin.qq.com/cgi-bin/media/get?access_token=ACCESS_TOKEN&media_id=MEDIA_ID

export default class WeiXin {
  constructor() {
    // URL变化时 需要重新调用wx.config
    this.load();
  }
  load(config) {
    config = {
      onMenuShareTimeline: null,
      onMenuShareAppMessage: null,
      onMenuShareQQ: null,
      onMenuShareWeibo: null,
      onMenuShareQZone: null
    }
    // wx.config({
    //   // 确保你获取用来签名的url是动态获取的，动态页面可参见实例代码中php的实现方式。如果是html的静态页面在前端通过ajax将url传到后台签名，前端需要用js获取当前页面除去'#'hash部分的链接（可用location.href.split('#')[0]获取,而且需要encodeURIComponent），因为页面一旦分享，微信客户端会在你的链接末尾加入其它参数，如果不是动态获取当前链接，将导致分享后的页面签名失败。
    //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: 'wx5324f0513895893e',
    //   timestamp: '', // 必填，生成签名的时间戳
    //   nonceStr: '', // 必填，生成签名的随机串
    //   signature: '',// 必填，签名，见附录1
    //   jsApiList: [
    //     'chooseImage',
    //     'previewImage',
    //     'uploadImage',
    //     'downloadImage',
    //     'getNetworkType',
    //     'openLocation',
    //     'getLocation',
    //     'hideOptionMenu',
    //     'showOptionMenu',
    //     'hideMenuItems',
    //     'showMenuItems',
    //     'hideAllNonBaseMenuItem',
    //     'showAllNonBaseMenuItem',
    //     'closeWindow',
    //     'scanQRCode',
    //     'chooseWXPay',
    //     'openProductSpecificView',
    //     'addCard',
    //     'chooseCard',
    //     'openCard']
    // });
    // wx.ready(() => {
    //   console.log('load success');
    // });
    // wx.error(res => {
    //   console.log('load failure');
    // });
    // this.loadNetwork();
  }
//   /**
//    * init networktype
//   */
//   loadNetwork() {

//     /*
//     1.success：接口调用成功时执行的回调函数。
// 2.fail：接口调用失败时执行的回调函数。
// 3.complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。
// 4.cancel：用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。
// 5.trigger: 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
//     */
//   }
//   /**
//    * choose local images
//   */
//   chooseImage() {
//     wx.chooseImage({
//       count: 1, // 默认9
//       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//       success: function (res) {
//         var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//       }
//     });
//   }
//   /**
//    * preview selected images
//   */
//   previewImage() {
//     wx.previewImage({
//       current: '', // 当前显示图片的http链接
//       urls: [] // 需要预览的图片http链接列表
//     });
//   }
//   /**
//    * upload selected images
//   */
//   uploadImage() {
//     wx.uploadImage({
//       localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
//       isShowProgressTips: 1, // 默认为1，显示进度提示
//       success: function (res) {
//         var serverId = res.serverId; // 返回图片的服务器端ID
//       }
//     });
//   }
//   /**
//    * download specify image
//   */
//   downloadImage() {
//     wx.downloadImage({
//       serverId: '', // 需要下载的图片的服务器端ID，由uploadImage接口获得
//       isShowProgressTips: 1, // 默认为1，显示进度提示
//       success: function (res) {
//         var localId = res.localId; // 返回图片下载后的本地ID
//       }
//     });
//   }
//   /**
//    * use wechat map
//    */
//   openLocation() {
//     wx.openLocation({
//       latitude: 0, // 纬度，浮点数，范围为90 ~ -90
//       longitude: 0, // 经度，浮点数，范围为180 ~ -180。
//       name: '', // 位置名
//       address: '', // 地址详情说明
//       scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
//       infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
//     });
//   }
//   /**
//    * 网络类型2g，3g，4g，wifi, undefined
//   */
//   getNetworkType(callback) {
//     wx.getNetworkType({
//       success: res => {
//         callback(res);
//       }
//     })
//   }
//   /**
//    * get location
//    */
//   getLocation() {
//     wx.getLocation({
//       type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
//       success: function (res) {
//         var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//         var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//         var speed = res.speed; // 速度，以米/每秒计
//         var accuracy = res.accuracy; // 位置精度
//       }
//     });
//   }
}
