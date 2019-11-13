const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge.smart(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
