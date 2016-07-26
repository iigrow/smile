// var formidable = require('formidable'); // 流式解析，能随着数据块的上传接受它们，解析它们，并吐出特定的部分，就像我们之前提到的部分请求头和请求主体


var app = require('koa')();
// var router = require('koa-router')();

// router.get('/', function * (next){
// }).post('/')

var Router = require('./src/router');
console.log(Router)
var router = Router('./api');
app.use(router.routes())
  .listen(3000);

// let server = http.createServer((req,res) => {
//   res.write('Hello world');
//   res.end();
// })

// server.listen(3000);
// cookie签名密钥
// app.keys=
// this.cookies.set('name', 'tobi', { signed: true }); signed 为true时 签名才生效

// app.on('error', function(err, ctx){
//   log.error('server error', err, ctx);
// });
