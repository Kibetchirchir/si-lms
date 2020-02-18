const webpack = require('webpack');
const path = require('path');
// React v.16 uses some newer JS functionality, so to ensure everything
// works across all browsers, we're adding babel-polyfill here.
require('babel-polyfill');

module.exports = {
    entry: [
        './src/index'
    ],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
        ],
        alias: { 'dom-helpers': 'dom-helpers5' } ,
        extensions: ['.js', '.scss'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
