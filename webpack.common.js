const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP_PATH = path.resolve(__dirname, './src');
let webpackConfig = {
    entry: {
        'index': path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //css js资源加载
        publicPath: 'http://localhost:8080/'
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.json', '.scss', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                loaders: ['eslint-loader'],
                include: APP_PATH
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
                include: APP_PATH
            },

            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
                include: APP_PATH
            },


            {
                test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new HtmlWebpackPlugin({
            title: 'hello'
        }),
        //必须要这个bootstrap才能找到jquery
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};


module.exports = webpackConfig;
