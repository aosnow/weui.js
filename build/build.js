const webpack = require('webpack');
const config = require('./webpack.mod.config');

Promise.all(
  [{ weui: './weui.js' }]
  .map((entry) => {
    return new Promise((resolve, reject) => {
      // 未压缩版本
      webpack(config(entry, false, true), function(error) {
        if (error) {
          reject(error);
          return;
        }

        // mini 压缩版本
        webpack(config(entry, true, true), (err, stats) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(stats);
          }
        });
      });
    });
  })
).then(() => {
  console.info('build finished');
}).catch((err) => {
  console.error('build error', err);
});
