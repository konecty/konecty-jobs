const webpack = require('webpack');
const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, 'src/index.js'),
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
        },
        {
            test:/\.(css)/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new UglifyPlugin({
            sourceMap: true
        })
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
}