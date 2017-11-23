'use strict';

const path = require('path');

const dist = path.resolve(__dirname, 'dist');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const config = {
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: dist
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new WebpackManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'trip planner',
            inject: 'body',
            filename: 'app.html'
        }),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
    ,
    devtool: 'source-map',
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        contentBase: dist,
        openPage: 'app.html',
        hot: true,
        open: true
    }
};

module.exports = config;