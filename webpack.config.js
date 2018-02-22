const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/app.js',
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: { url: true }
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin({
            template: './src/index.html'
        }),
    ],
};
