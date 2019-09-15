"use strict";

const path = require("path");
const webpack = require("webpack");
const baseConfig = require("./base");
const defaultSettings = require("./defaults");
const watchChangePlugin = require("./plugin/watchChangePlugin.js");

const config = Object.assign({}, baseConfig, {
	mode: "development",
	entry: {
		app: [
			"webpack-dev-server/client?http://localhost:" + defaultSettings.port,
			"babel-polyfill",
			"./src/index"
		]
	},
	output: {
		path: path.join(__dirname, "/../dist/js"),
		filename: "[name].js",
		publicPath: defaultSettings.publicPath,
		chunkFilename: "[name].chunk.js"
	},
	devtool: "cheap-module-eval-source-map",
	plugins: [
		new watchChangePlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.rules.push({
	test: /\.(js|jsx)$/,
	include: [path.join(__dirname, "/../src")],
	use: ["babel-loader"]
});

module.exports = config;
