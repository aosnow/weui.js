const path = require('path');
const fs = require('fs');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');

const utils = require('./utils');
const paths = [utils.resolve('docs', 'component')];

// 创建必须的目录
paths.forEach(p => {
  utils.mkdirsSync(p);
});

const docs = glob.sync(path.join(__dirname, '../src/**/*.js'))
                 // 排除不需要解析的列表
                 .filter(function(file) {
                   if (/util\/util.js/.test(file)) return false;

                   const basename = path.basename(file, '.js');
                   const dirname = path.dirname(file).substr(path.dirname(file).lastIndexOf('/') + 1);
                   return basename === dirname;
                 })
                 // 解析列表
                 .map(function(file) {
                   const basename = path.basename(file, '.js');
                   const doc = jsdoc2md.renderSync({ files: file });
                   const filepath = utils.resolve('docs', 'component', basename + '.md');

                   fs.writeFileSync(filepath, doc);
                   console.log(`generate ${basename}.md ...`);
                   return basename;
                 })
                 // 拼接解析结果
                 .reduce(function(doc, a) {
                   return `${doc}\n- [${a}](component/${a}.md)`;
                 }, '');

const summary = `# Api for @mudas/weui.js\n${docs}`;
fs.writeFileSync(utils.resolve('docs/README.md'), summary);
