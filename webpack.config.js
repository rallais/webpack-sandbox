'use strict';

const path = require('path');
const dist = path.resolve(__dirname, 'dist');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: dist
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new WebpackManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'trip planner',
            inject: 'body',
            filename: 'app.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env',
                                {
                                    'targets': {
                                        'browsers': ['last 2 versions', 'ie >= 11']
                                    },
                                    modules: false,
                                    cacheDirectory: true,
                                    debug: true
                                }]
                        ],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        contentBase: dist,
        openPage: 'app.html'
    }
};

module.exports = config;
