const webpack = require('webpack');
const portfinder = require('portfinder');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const utils = require('./utils');
const loaders = require('./loaders');

// report plugin
const report = process.env.REPORT === 'true';

// TODO: 升级到 webpack v4.39.x 加强热调试（目前无法热更新调试，参照 member-h5）
const BaseConfig = {
  mode: utils.DEBUG ? 'development' : 'production',
  context: utils.resolve('example'),
  devtool: utils.DEBUG ? 'cheap-module-eval-source-map' : false,

  entry: {
    example: './example.js'
  },
  output: {
    path: utils.resolve('dist', 'example'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.json', '.css', '.less', '.scss'],
    alias: {
      '@': utils.resolve('src'),
      docs: utils.resolve('docs'),
      example: utils.resolve('example')
    }
  },

  optimization: {
    minimize: !utils.DEBUG,
    runtimeChunk: false,
    splitChunks: false
  },

  module: {
    rules: [

      // zepto 不支持 commonjs 模式，用以下方式 export
      {
        test: require.resolve('zepto'),
        use: ['exports-loader?window.Zepto', 'script-loader']
      },

      // js babel es6 -----------------------------------------------------------
      {
        test: /\.m?jsx?$/,
        use: loaders.resolve('babel-loader'),
        exclude: /(node_modules|bower_components)/,
        include: [
          utils.resolve('src'),
          utils.resolve('example'),
          utils.resolve('node_modules/webpack-dev-server/client')
        ]
      },

      // css -----------------------------------------------------------
      // 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]_[hash:base64:5]!postcss!less'
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },

      // html -----------------------------------------------------------
      {
        test: /\.(html)(\?.*)?$/,
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: false,
          collapseWhitespace: false
        }
      }
    ]
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('example/index.html')
    })
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

if (utils.DEBUG) {
  BaseConfig.devServer = {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false,
    progress: true,
    compress: true, // gzip 压缩
    host: '0.0.0.0',
    port: '8001',
    open: false,
    overlay: { warnings: false, errors: true },
    quiet: true, // necessary for FriendlyErrorsPlugin
    writeToDisk: false, // write generated assets to the disk
    watchOptions: {
      aggregateTimeout: 1000,
      ignored: /node_modules/,
      poll: 1000
    }
  };

  BaseConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

if (report) {
  BaseConfig.plugins.push(
    new BundleAnalyzerPlugin({
      logLevel: 'warn',
      openAnalyzer: false,
      analyzerMode: report ? 'static' : 'disabled',
      reportFilename: `report.html`,
      generateStatsFile: false
    })
  );
}

module.exports = utils.DEBUG ? new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || BaseConfig.devServer.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    }
    else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      BaseConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      BaseConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${BaseConfig.devServer.host}:${port}`]
        },
        onErrors: undefined
      }));

      resolve(BaseConfig);
    }
  });
}) : BaseConfig;
