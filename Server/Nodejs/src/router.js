var path = require('path');
var fs = require('fs');
var resources = fs.readdirSync(path.resolve(__dirname,'./api'));
// 递归处理 resources 每级目录构建一个 parent routeTable 
// 每次请求来时  分解url  然后在routeTable中找到最匹配的结果
// 抄袭 koa-router
if(resources.length > 0) {
  resources.forEach(value=>{
    let res = require(value);
    console.log(res);
  })
}

console.log(resources);