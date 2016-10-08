module.exports = {
    entry: './src/index.jsx',

    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [ /node_modules/, /functions/ ],
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
