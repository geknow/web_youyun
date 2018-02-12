const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/',
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://39.106.138.103:8080/',
                pathRewrite: {
                    '^/api/' : '/'           // remove base path
                }
            }
        }
    },
    // 使用hot-middleware不能使用extractCss，会引起冲突，让页面无法hot reload
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
});