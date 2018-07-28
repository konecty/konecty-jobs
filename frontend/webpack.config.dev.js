const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
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
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    }
}