const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/swiper',
        createProxyMiddleware({
            target: 'https://resource.smartisan.com/resource/',
            changeOrigin: true,
            pathRewrite: {
                "^/swiper": ""
            }
        }
        ));
}