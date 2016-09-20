var glob = require('glob');

module.exports = {
    entry : glob.sync("./app/**/*.js"),
    output: {
        path: './public/js',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [
            "",
            ".js"
        ]
    },

    module: {
        loaders: [
            {
                test : /\.js?/,
                exclude: /node_modules/,
                loader : 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};