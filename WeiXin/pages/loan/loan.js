
var common = require('common.js');

var app = getApp();
Pages({
  data: {
    text: "This is page data."
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  // Event handler.
  viewTap: function () {
    // key 可以是属性访问表达式比如 'array[0].value' : 'xxx'
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }

  // 最终在 event.target.dataset 中会将连字符转成驼峰elementType

  // 冒泡事件  除以下事件外 其它都是非冒泡事件 
  // touchstart	手指触摸动作开始   <canvas/> 中的触摸事件不可冒泡，所以没有 currentTarget。
  // touchmove	手指触摸后移动
  // touchcancel	手指触摸动作被打断，如来电提醒，弹窗
  // touchend	手指触摸动作结束
  // tap	手指触摸后马上离开
  // longtap	手指触摸后，超过350ms再离开

  // key 以bind或catch开头，然后跟上事件的类型，如bindtap, catchtouchstart
  // value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
  // bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。


  // 属性	类型	描述
  // data	Object	页面的初始数据
  // onLoad	Function	生命周期函数--监听页面加载
  // onReady	Function	生命周期函数--监听页面初次渲染完成
  // onShow	Function	生命周期函数--监听页面显示
  // onHide	Function	生命周期函数--监听页面隐藏
  // onUnload	Function	生命周期函数--监听页面卸载
  // onPullDownRefresh	Function	页面相关事件处理函数--监听用户下拉动作
  // onReachBottom	Function	页面上拉触底事件的处理函数
  // 其他	Any	开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问
})