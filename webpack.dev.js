const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: true
    },
    // 使用hot-middleware不能使用extractCss，会引起冲突，让页面无法hot reload
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
});