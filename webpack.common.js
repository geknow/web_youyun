const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP_PATH = path.resolve(__dirname, './src');
let webpackConfig = {
    entry: {
        'index': path.resolve(__dirname, 'src', 'index.jsx'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
                include: APP_PATH
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
                include: APP_PATH
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
        })
    ]
};


module.exports = webpackConfig;
