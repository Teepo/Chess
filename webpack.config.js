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
