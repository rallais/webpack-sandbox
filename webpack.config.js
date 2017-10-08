'use strict';

const path = require('path');
const dist = path.resolve(__dirname, 'dist');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        print: './src/math.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: dist
    },
    plugins: [
        new WebpackManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'home',
            filename: 'app.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        contentBase: dist,
        openPage: 'app.html'
    }
};
