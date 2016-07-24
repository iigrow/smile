var http = require('http');
var formidable = require('formidable') // 流式解析，能随着数据块的上传接受它们，解析它们，并吐出特定的部分，就像我们之前提到的部分请求头和请求主体

let server = http.createServer((req,res) => {
  res.write('Hello world');
  res.end();
})

server.listen(3000);