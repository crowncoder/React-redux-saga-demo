'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let SpritesmithPlugin = require('webpack-spritesmith');
let config = Object.assign({}, baseConfig, {
  entry: { app: [path.join(__dirname, '../src/index')], vendor: ['react', 'react-dom'] },
  cache: false,
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/../dist/js'),
    filename: '[name].[chunkhash:5].js',
    publicPath: defaultSettings.publicPath,
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new SpritesmithPlugin({
      src: {
          cwd: path.resolve(__dirname, '../src/images/icons'),  //准备合并成sprit的图片存放文件夹
          glob: '*.png'  //哪类图片
      },
      target: {
          image: path.resolve(__dirname, '../src/images/sprites.png'),  // sprite图片保存路径
          css: path.resolve(__dirname, '../src/styles/_sprites.scss')  // 生成的sass保存在哪里
      },
      apiOptions: {
          cssImageRef: "../images/sprites.png" //css根据该指引找到sprite图
      }
  }),
    new HtmlWebpackPlugin(
      {
        filename: '../index.html',
        title: 'React Project Demo',
        template: path.join(__dirname, '../src/template.ejs'),
        inject: true, cache: false
      }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      filename: '[name].[chunkhash:5].js',
    }),
    new ExtractTextPlugin('../css/[name].[chunkhash].css')

  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: [
    {
      loader: 'babel-loader',
      // query: {
      //   presets: [
      //     "react",
      //     "stage-0",
      //     ["es2015", { "modules": false }]
      //   ]
      // }
    }
  ],
  include: [path.join(__dirname, '/../src')]
});

module.exports = config;
