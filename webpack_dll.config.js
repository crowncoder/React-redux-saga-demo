const webpack = require('webpack');
const path = require('path');

const vendors = [
  'antd',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
];

module.exports = {
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname,'dist','[name].manifest.json'),
      name: '[name]_[chunkhash]',
    }),
  ],
};