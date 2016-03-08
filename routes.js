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

module.exports.listProjects = function* () {
  const projects = wrap(db.get('projects'));
  this.body = yield projects.find({});
};

module.exports.findProject = function* (name) {
  const projects = wrap(db.get('projects'));
  this.body = yield projects.findOne({ "username": name });
};

module.exports.findContributor = function* (name) {
  console.log(name);
  const contributors = wrap(db.get('contributors'));
  this.body = yield contributors.findOne({ "username": name });
};

