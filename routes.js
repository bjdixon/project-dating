const parse = require('co-body');
const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost/github-dating');

module.exports.root = function* () {
  this.body = yield { text: 'hello world' };
};

module.exports.listContributors = function* () {
  const contributors = wrap(db.get('contributors'));
  this.body = yield contributors.find({});
};

