var path = require('path');
var fs = require('fs');
var resources = fs.readdirSync(path.resolve(__dirname, './api'));

module.exports = Router;

function Router(apiPath) {
  if (!(this instanceof Router)) {
    return new Router(apiPath);
  }
  this.Routers = this.buildRouter(path.resolve(__dirname, apiPath));
}

Router.prototype.buildRouter = function (dir) {
  let routes = {};
  let subDirs = fs.readdirSync(dir);
  subDirs.forEach(value => {
    let targetdir = path.resolve(dir, value);
    if (fs.statSync(targetdir).isFile()) {
      let handle = require(targetdir);
      routes[value.substring(0, value.indexOf('.'))] = (method) => {
        if (handle.hasOwnProperty(method)) {
          return (/*参数*/) => { handle[method](); }
        } else {
          throw new Error('notFoundMethod');
        }
      }
    } else {
      routes[value] = this.buildRouter(targetdir);
    }
  })
  return routes;
}

Router.prototype.match = function (router, url, method) {
  // start with '/'
  if (url.length > 1) {
    let routeUrl = url.substring(1);
    let index = routeUrl.indexOf('/');
    let routeNode = index > 0 ? routeUrl.substring(0, index) : routeUrl;
    if (router.hasOwnProperty(routeNode)) {
      let route = router[routeNode];
      if (typeof route === 'function') {
        // 参数应该有两个 剩余路径  查询字符串 
        return route(method);
      }
      // default route is 'index'
      return this.match(route, index > 0 ? routeUrl.substring(index) : '/index');
    }
  }
  throw new Error('notFoundRouter');
}

Router.prototype.route = function (url) {
  return this.match(this.Routers, url);
}

Router.prototype.routes = function () {
  let router = this;
  // TODO: 过滤掉静态文件
  return function* (next) {
    let handle = router.route(this.path);
    // 将结果写入
    this.body = handle();
    yield next;
  }
}
