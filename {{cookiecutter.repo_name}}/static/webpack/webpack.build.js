var loaders = require("./loaders");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		filename: 'build.js',
		path: 'dist'
	},
	devtool: 'source-map',
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ["node_modules"]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(
			{
				warning: false,
				mangle: true,
				comments: false
			}
		),
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
	module: {
		loaders: loaders
	}
};