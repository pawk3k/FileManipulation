const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './index.js',
    },
    resolve: {
        fallback: {
            fs: false,
        },
        alias: {
            stream: 'stream-browserify',
            zlib: 'browserify-zlib',
            https: 'https-browserify',
            fs: 'fs',
            http: 'stream-http',
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|json|css)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            PIXI: 'pixi.js',
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            favicon: './app/icon.png',
        }),
    ],
    output: {
        filename: 'o.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
