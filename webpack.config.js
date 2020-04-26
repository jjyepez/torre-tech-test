const path = require('path');

module.exports = {

    entry: './src/client/entry.js',

    output: {
        path: path.join(__dirname, '/public/js'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/i,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
        ],
    },
};
