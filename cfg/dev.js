'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
  entry:{
     app:['webpack-dev-server/client?http://localhost:'+defaultSettings.port,
    'webpack/hot/dev-server',
    './src/index'],
  },
  output: {
    path: path.join(__dirname, '/../dist/js'),
    filename: '[name].js',
    publicPath: defaultSettings.publicPath,
    chunkFilename: '[name].chunk.js'
  },
  devtool:'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  include:[ path.join(__dirname, '/../src') ],
  use: ['react-hot-loader','babel-loader']

});

module.exports = config;
