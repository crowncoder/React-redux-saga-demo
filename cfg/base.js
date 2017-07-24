'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
//let additionalPaths = [];

module.exports = {
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      saga: `${defaultSettings.srcPath}/saga/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      images: `${defaultSettings.srcPath}/images/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      containers: `${defaultSettings.srcPath}/containers/`,
      util: `${defaultSettings.srcPath}/util/`
    }
  },
  module: {}
};
