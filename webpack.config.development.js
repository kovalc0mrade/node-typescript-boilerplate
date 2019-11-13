const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.base');

module.exports = merge.smart(baseConfig, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
});
