var app = require('koa')();
var Router = require('./router');

var router = Router({ api: 'api', assert: 'assert' });
// var formidable = require('formidable'); // 流式解析，能随着数据块的上传接受它们，解析它们，并吐出特定的部分，就像我们之前提到的部分请求头和请求主体

console.log('start server ...')

app.use(router.routes())
  .on('error', function (err, ctx) {
    console.log(err);
  })
  .listen(3000);

console.log('waiting request ...')
