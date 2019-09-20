const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const entry = require('webpack-glob-entry');
const utils = require('./utils');

const extractOptions = {
  filename: `[name].css`,
  chunkFilename: `[name].css`
};

const BaseConfig = {
  mode: utils.DEBUG ? 'development' : 'production',
  devtool: utils.DEBUG ? 'cheap-module-eval-source-map' : false,

  entry: entry(
    utils.resolve('style', 'weui.less'),
    utils.resolve('style', 'widget', '**', '*.less')
  ),
  output: {
    path: utils.resolve('dist', 'style')
  },

  resolve: {
    extensions: ['.js', '.json', '.css', '.less', '.scss']
  },

  optimization: {
    minimize: !utils.DEBUG,
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  module: {
    rules: [

      // css -----------------------------------------------------------
      {
        test: /\.(le|c)ss$/,
        use: [
          utils.DEBUG ? 'style-loader' : {
            loader: MiniCssExtractPlugin['loader'],
            options: { hmr: utils.DEBUG }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }

    ]
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin(extractOptions),
    new FixStyleOnlyEntriesPlugin()
  ],

  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }

};

module.exports = BaseConfig;
