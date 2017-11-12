'use strict';

const path = require('path');
const dist = path.resolve(__dirname, 'dist');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const BabelMinifyWebpackPlugin = require("babel-minify-webpack-plugin");


const config = {
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: dist
    },
    plugins: [
        new BabelMinifyWebpackPlugin(),
        new WebpackManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'trip planner',
            inject: 'body',
            filename: 'app.html'
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
    devtool: 'inline-cheap-module-source-map',
    devServer: {
        port: 9000,
        contentBase:
        dist,
        openPage:
            'app.html'
    }
};

module.exports = config;