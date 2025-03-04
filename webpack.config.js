const path = require('path');

module.exports = {
    mode: 'development', // Change to 'production' when deploying
    entry: './assets/scripts/main.js', // Entry point for the application
    output: {
        filename: 'bundle.js', // Bundled file name
        path: path.resolve(__dirname, 'dist'), // Output directory in the root
        publicPath: '/', // Specifies the public URL of the output directory when referenced in a browser, useful for webpack-dev-server to serve the files correctly
        clean: true // Cleans the output directory before emit (Webpack 5 feature)
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile .js files using Babel to convert ES6+ code to ES5
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpiles ES6+ code
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // Handle CSS files using style-loader and css-loader
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist') // Serve files from the 'dist' directory
        },
        compress: true, // Enable gzip compression
        port: 9000, // Server port
        open: true, // Open the browser after the server has started
        historyApiFallback: true // Fallback for Single Page Applications
    },
    devtool: 'source-map' // Generate source maps for easier debugging
};
