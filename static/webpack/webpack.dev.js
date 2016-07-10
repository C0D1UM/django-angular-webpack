var path = require('path');
var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: ['./src/index.ts'],
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new BundleTracker({
            filename: './webpack-stats.json'
        })
    ],
    module:{
        loaders: loaders
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "../dist")]
    }
};