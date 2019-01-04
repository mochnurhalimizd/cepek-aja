const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const HOST = '0.0.0.0';
const PORT = 8080;

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: true,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
