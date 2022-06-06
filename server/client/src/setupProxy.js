const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/dogs", "/dogs/*", "/dog", "/dog/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};