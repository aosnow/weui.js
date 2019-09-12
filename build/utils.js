// ------------------------------------------------------------------------------
// name: utils
// author: 喵大斯( mschool.tech )
// created: 2019/8/28 17:38
// ------------------------------------------------------------------------------

const fs = require("fs");
const path = require('path');

exports.DEBUG = process.env.NODE_ENV === 'development';

exports.resolve = function(...dir) {
  return path.join(__dirname, '..', ...dir);
};

// 递归创建目录 同步方法
exports.mkdirsSync = function(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  }
  else {
    if (exports.mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
};
