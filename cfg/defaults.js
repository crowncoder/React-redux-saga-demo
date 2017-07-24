/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  let cssHandler = process.env.mode === 'dist' ? { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" }) } :
    { test: /\.css/, use: ["style-loader", "css-loader"] };

  let sassHandler = process.env.mode === 'dist' ? { test: /\.scss/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "sass-loader"] }) } :
    { test: /\.scss/, use: ["style-loader", "css-loader", "sass-loader"] };
  return {
    rules: [
      { test: /\.js$/, enforce: 'pre', loader: 'eslint-loader', include: srcPath }, cssHandler, sassHandler,
      { test: /\.less/, use: ["style-loader", "css-loader", "less-loader?{modifyVars:{'@primary-color':'#00a890'}}"] },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, use: 'url-loader?limit=50000&name=asserts/[name].[hash:5].[ext]' }
    ]

  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/js/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
