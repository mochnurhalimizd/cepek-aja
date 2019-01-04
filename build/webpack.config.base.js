const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeAssetPlugin = require('optimize-css-assets-webpack-plugin');
const utils = require('./utils');

module.exports = {
  resolve: {
    extensions: ['.es6', '.js', '.jsx'],
    alias: {
      '@': utils.resolve('src'),
    },
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  entry: {
    app: ['./src/app.js'],
    vendor: ['react', 'react-dom'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.styl(us)?$/,
        use: ['css-loader', 'stylus-loader'],
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]'),
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          mangle: {
            keep_fnames: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new OptimizeAssetPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
};
