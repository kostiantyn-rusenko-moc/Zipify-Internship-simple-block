const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, ''),
        port: 3110,
        open: true,
        liveReload: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            linkType: 'text/css',
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.join(__dirname, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};