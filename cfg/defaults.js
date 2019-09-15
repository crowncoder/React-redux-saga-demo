/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
"use strict";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const srcPath = path.join(__dirname, "/../src");
console.log(srcPath);
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
	const cssHandler =
		process.env.mode === "dist"
			? {
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								// you can specify a publicPath here
								// by default it uses publicPath in webpackOptions.output
								publicPath: "../",
								hmr: process.env.NODE_ENV === "development"
							}
						},
						"style-loader",
						"css-loader"
					]
			  }
			: { test: /\.css/, use: ["style-loader", "css-loader"] };

	let cssLoader = {
		loader: "css-loader",
		options: {
			modules: true //让css-loader支持Css Modules。
		}
	};
	let sassHandler =
		process.env.mode === "dist"
			? {
					test: /\.scss/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						cssLoader,
						"sass-loader"
					]
			  }
			: { test: /\.scss/, use: ["style-loader", cssLoader, "sass-loader"] };
	return {
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				loader: "eslint-loader",
				include: srcPath
			},
			cssHandler,
			sassHandler,
			{
				test: /\.less/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "less-loader", // compiles Less to CSS
						options: {
							modifyVars: {
								"primary-color": "#00a890"
							},
							javascriptEnabled: true
						}
					}
				]
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				use: "url-loader?limit=50000&name=asserts/[name].[hash:5].[ext]"
			}
		]
	};
}

module.exports = {
	srcPath: srcPath,
	publicPath: "/js/",
	port: dfltPort,
	getDefaultModules: getDefaultModules
};
