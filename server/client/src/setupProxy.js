const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api/dogs", "/api/dogs/*", "/api/dog", "/api/dog/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};