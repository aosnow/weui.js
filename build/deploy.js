// ------------------------------------------------------------------------------
// name: deploy
// author: mudas( mschool.tech )
// created: 2019/9/23 10:08
// ------------------------------------------------------------------------------

const path = require('path');
const ghpages = require('gh-pages');
const pkg = require('../package.json');

ghpages.publish(
  path.join(__dirname, '../docs'),
  {
    remote: 'origin',
    branch: 'gh-pages',
    message: `update docs for ${pkg.name + ' v' + pkg.version}`,
    dest: path.join(__dirname, '../docs'),
    logger: function(message) {
      console.log(message);
    }
  },
  function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('docs published.');
    }
  }
);
