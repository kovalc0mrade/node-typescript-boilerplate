const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
  target: 'node',
};
