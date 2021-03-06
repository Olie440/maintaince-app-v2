const webpack = require('webpack');
const path = require('path');
const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    devtool: isProduction ? null : 'source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        app: ['./components/index.js', './controllers/index.js', './app.js'],
        vendor: ['angular', 'angular-route', 'angular-cookie', 'angular-mocks']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: true
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    devServer: {
        inline: true
    }
};