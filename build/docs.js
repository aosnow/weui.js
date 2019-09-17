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

const ExcludeDirs = ['util'];

function lastDirName(dir) {
  const matched = dir.match(/[a-z-_]+[\\/]?$/i);
  return matched ? matched[0].replace(/[\\/]$/, '') : '';
}

function entryName(dir) {
  const dirname = lastDirName(dir);
  if (fs.existsSync(`${dir}index.js`)) return `${dir}index.js`;
  if (fs.existsSync(`${dir}${dirname}.js`)) return `${dir}${dirname}.js`;
}

function filterDir(dir) {
  const dirname = lastDirName(dir);
  return dirname &&
         ExcludeDirs.indexOf(dirname) === -1 &&
         (fs.existsSync(`${dir}index.js`) || fs.existsSync(`${dir}${dirname}.js`));
}

function parseJsDoc(dir) {
  const dirname = lastDirName(dir);
  const entry = entryName(dir);
  const doc = jsdoc2md.renderSync({ files: entry });
  const filepath = utils.resolve('docs', 'component', dirname + '.md');

  fs.writeFileSync(filepath, doc);
  console.log(`generate ${dirname}.md ...`);
  return dirname;
}

const dirs = glob.sync(utils.resolve('src/*/'));
const docs = dirs.filter(filterDir)
                 .map(parseJsDoc)
                 .reduce(function(doc, a) {
                   return `${doc}\n- [${a}](component/${a}.md)`;
                 }, '');

const summary = `# Api for @mudas/weui.js\n${docs}`;
fs.writeFileSync(utils.resolve('docs/README.md'), summary);
console.log(`\ncompleted !`);
