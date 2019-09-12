// ------------------------------------------------------------------------------
// name: loaders
// author: 喵大斯( mschool.tech )
// created: 2019/8/29 17:15
// ------------------------------------------------------------------------------

const os = require('os');
const utils = require('./utils');

// 是否为 Babel 或 TypeScript 使用 thread-loader
exports.resolve = function(loaders) {
  const src = Array.isArray(loaders) ? loaders.slice() : [loaders];
  src.unshift(
    { loader: 'cache-loader' },
    { loader: 'thread-loader', options: { worker: os.cpus().length, poolTimeout: 2000 } }
  );
  return src;
};
