const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://m.biyao.com',
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    },
    headers: {
      referer: 'http://m.biyao.com',
      host: 'm.biyao.com'
    },
    hostRewrite: 'm.biyao.com'
  }));
};