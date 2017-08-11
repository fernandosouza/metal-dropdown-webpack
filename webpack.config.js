const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/DropdownWebpack.js',
	devtool: 'source-map',
	devServer: {
		port: 9000,
		contentBase: [
			path.join(__dirname, "build"),
			path.join(__dirname, "demos")
		]
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					compact: false,
					presets: ['babel-preset-es2015'],
					plugins: ['babel-plugin-transform-node-env-inline']
				}
			}
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/dropdown-webpack.js'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
