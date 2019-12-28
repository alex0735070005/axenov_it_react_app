const proxy = require('http-proxy-middleware');

const filter = (pathname, req) => {
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.headers.accept);
  return (
    pathname.match('^(/api|/registration|/personal|/login|/logout)') &&
    /application\/json/.test(req.headers.accept)
  );
};

module.exports = function setupProxy(app) {
  app.use(
    proxy(filter, {
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};
