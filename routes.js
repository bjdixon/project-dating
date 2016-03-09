const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost/github-dating');

const find = function (doc, field) {
  return function* (value) {
    const wrappedDoc = wrap(db.get(doc));
    const query = {};
    if (field) {
      query[field] = value;
    }
    this.body = yield wrappedDoc.find(query);
  };
};

const root = function* () {
  this.body = yield { text: 'hello world' };
};

module.exports = {
  root,
  listProjects: find('projects'),
  findProject: find('projects', 'username'),
  listContributors: find('contributors'),
  findContributor: find('contributors', 'username')
};
