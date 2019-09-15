"use strict";

const path = require("path");
const webpack = require("webpack");

const baseConfig = require("./base");
const defaultSettings = require("./defaults");

// Add needed plugins here
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpritesmithPlugin = require("webpack-spritesmith");
const EndWebpackPlugin = require("./plugin//endWebpackPlugin.js");
const config = Object.assign({}, baseConfig, {
	mode: "production",
	entry: { app: ["babel-polyfill", path.join(__dirname, "../src/index")] },
	cache: false,
	devtool: "cheap-module-source-map",
	output: {
		path: path.join(__dirname, "/../dist/js"),
		filename: "[name].[chunkhash:5].js",
		publicPath: defaultSettings.publicPath,
		chunkFilename: "[name].[chunkhash:5].chunk.js"
	},
	plugins: [
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, "../src/images/icons"), //准备合并成sprit的图片存放文件夹
				glob: "*.png" //哪类图片
			},
			target: {
				image: path.resolve(__dirname, "../src/images/sprites.png"), // sprite图片保存路径
				css: path.resolve(__dirname, "../src/styles/_sprites.scss") // 生成的sass保存在哪里
			},
			apiOptions: {
				cssImageRef: "../images/sprites.png" //css根据该指引找到sprite图
			}
		}),
		new EndWebpackPlugin(
			() => {
				console.log("deploy success");
			},
			err => {
				// Webpack 构建失败，err 是导致错误的原因
				console.error(err);
			}
		),

		new webpack.DllReferencePlugin({
			manifest: require("../dist/vendor.manifest.json")
		}),

		new HtmlWebpackPlugin({
			filename: "../index.html",
			title: "React Project Demo",
			template: path.join(__dirname, "../src/template.ejs"),
			inject: true,
			cache: false
		}),
		new MiniCssExtractPlugin({
			filename: "../css/[name].[chunkhash:5].css",
			chunkFilename: "../css/[name].[chunkhash:5].chunk.css"
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "vendor",
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
	module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.rules.push({
	test: /\.(js|jsx)$/,
	use: [
		{
			loader: "babel-loader"
		}
	],
	include: [path.join(__dirname, "/../src")]
});

module.exports = config;
