/*
 * @Author: star 
 * @Date: 2016-10-26 09:29:54 
 * @Last Modified by: star
 * @Last Modified time: 2016-10-26 09:49:29
 */

var https = require('https');
var ssl = require('koa-ssl');
var app = require('koa')();
var Router = require('./router');
var authenticate = require('./filter/authenticate');

var router = Router({
  api: 'api',
  resources: ['assets', 'static'],
  filter: [authenticate]
});
// var formidable = require('formidable'); // 流式解析，能随着数据块的上传接受它们，解析它们，并吐出特定的部分，就像我们之前提到的部分请求头和请求主体

// app.keys = ['im a newer secret', 'i like turtle'];
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

app.use(router.routes())
  .on('error', function (err, ctx) {
    console.log(err);
  })

console.log('start server ...')

https.createServer({
  ca: fs.readFileSync('/root/.ssl/ca.crt'),
  key: fs.readFileSync('/root/.ssl/smilplex.key'),
  cert: fs.readFileSync('/root/.ssl/smilplex.crt'),
  passphrase: '1234'
}, app.callback()).listen(Process.env.PORT);

console.log('waiting request ...')