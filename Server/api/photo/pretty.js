module.exports.get = function () {
  this.set('Content-Type','application/json;charset=UTF-8');
  return { "src": "/assets/img/img_001.jpg", "width": 352, "height": 3220 };
}