const proxy = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
  app.use(
    ['/login', '/registration', '/personal'],
    proxy({
      target: 'http://localhost:9000',
      changeOrigin: true,
    }),
  );
};
