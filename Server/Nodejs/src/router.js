const path = require('path');
const fs = require('fs');
// const debug = require('debug')('koa-router');
const HttpError = require('http-errors');
const send = require('koa-send');

function Router(config) {
  if (!(this instanceof Router)) {
    return new Router(config);
  }
  this.config = Object.assign({
    api: 'api',
    assert: 'assert'
  }, config);
  this.Routers = this.buildRouter(path.resolve(__dirname, config.api));
}

Router.prototype.buildRouter = function (dir) {
  let routes = {};
  let subDirs = fs.readdirSync(dir);
  subDirs.forEach(value => {
    let targetdir = path.resolve(dir, value);
    if (fs.statSync(targetdir).isFile()) {
      let handle = require(targetdir);
      routes[value.substring(0, value.indexOf('.'))] = (method, routeParams) => {
        if (method === 'delete') {
          method = 'del'
        }
        if (handle.hasOwnProperty(method)) {
          return function () {
            return handle[method].apply(this, routeParams);
          }
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

Router.prototype.match = function (router, method, url) {
  // TODO: 一次处理好所有字符串 转成对象 进行递归处理
  let index = url.indexOf('/');
  let routeNode = url;
  let surplusRoute = '';
  if (index > 0) {
    routeNode = url.substring(0, index);
    surplusRoute = url.substring(index + 1);
  }
  if (router.hasOwnProperty(routeNode)) {
    let route = router[routeNode];
    if (typeof route === 'function') {
      return route(method, surplusRoute.split('/'));
    }
    return this.match(route, method, surplusRoute);
  }
  throw new Error('notFoundRouter');
}

Router.prototype.route = function (method, url) {
  return this.match(this.Routers, method.toLowerCase(), url.substring(1));
}

Router.prototype.routes = function () {
  let router = this;
  return function* (next) {
    let urlPath = this.path;
    if (urlPath.startsWith('/' + router.config.api)) {
      let handle = router.route(this.method, urlPath.replace('/' + router.config.api, ''));
      // 将结果写入
      let data = handle.call(this);
      this.body = data;
    } else if (urlPath.startsWith('/' + router.config.assert)) {
      yield send(this, urlPath, {})
    }
    else {
      yield next;
    }
  }
}

module.exports = Router;
