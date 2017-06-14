const webpack = require('webpack');

module.exports = {
    entry : './src/Chess.js',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js',
        library: 'Chess'
    },

    resolve: {
        extensions: [".js"]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],

    module: {
        loaders: [
            {
                test : /\.js?/,
                exclude: /node_modules/,
                loader : 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    }
};
