const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// TODO: 升级到 webpack v4.39.x 加强热调试（目前无法热更新调试，参照 member-h5）
module.exports = {
  context: path.join(__dirname, '../example'),
  entry: {
    example: './example.js'
  },
  output: {
    path: path.join(__dirname, '../dist/example'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html?minimize'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]_[hash:base64:5]!postcss!less'
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        loader: 'style!css!postcss'
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    progress: true,
    host: '0.0.0.0',
    port: '8001',
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"dev"',
      'process.env.NODE_ENV': '"dev"'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../example/index.html')
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8001' }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
