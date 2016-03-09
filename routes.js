const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost/github-dating');

const root = function* () {
  this.body = yield { text: 'hello world' };
};

const listContributors = function* () {
  const contributors = wrap(db.get('contributors'));
  this.body = yield contributors.find({});
};

const listProjects = function* () {
  const projects = wrap(db.get('projects'));
  this.body = yield projects.find({});
};

const findProject = function* (name) {
  const projects = wrap(db.get('projects'));
  this.body = yield projects.findOne({ username: name });
};

const findContributor = function* (name) {
  const contributors = wrap(db.get('contributors'));
  this.body = yield contributors.findOne({ username: name });
};

module.exports = {
  root,
  listProjects,
  findProject,
  listContributors,
  findContributor
};
