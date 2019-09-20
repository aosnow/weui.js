const path = require('path');
const webpack = require('webpack');
const utils = require('./utils');
const pkg = require('../package.json');
const BaseConfig = require('./webpack.example.config');

module.exports = function(entry, minimize, noHtml = false) {
  BaseConfig.plugins.push(
    new webpack.BannerPlugin([
      pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
      'Copyright ' + new Date().getFullYear() + ', ' + pkg.author,
      pkg.license + ' license'
    ].join('\n'))
  );

  // 构建 js 库时不需要构建 html 页面
  noHtml && BaseConfig.plugins.splice(1, 1);

  // 通过 npm run style 构建所有 css
  BaseConfig.externals = [/^(zepto)/i];

  BaseConfig.optimization.minimize = !!minimize;
  BaseConfig.context = utils.resolve('src');
  BaseConfig.entry = entry;
  BaseConfig.output = {
    path: utils.resolve('dist'),
    filename: minimize ? '[name].min.js' : '[name].js',
    library: 'weui',
    libraryTarget: 'umd'
  };

  return BaseConfig;
};
