const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost/github-dating');

const simpleQuery = function (field) {
  return function (value) {
  const query = {};
    if (field) {
      query[field] = value;
    }
    return query;
  };
};

const logicalQuery = function (type) {
  return function (fields) {
    const query = {};
    query[type] = fields.split(',').map((field) => {
      var fieldQuery = {},
        keyValue = field.split(':');
      fieldQuery[keyValue[0]] = {};
      fieldQuery[keyValue[0]]["$gte"] = +keyValue[1];
      return fieldQuery;
    });
    return query;
  };
};

const crud = function (operation) {
  return function (queryType) {
    return function (doc, fieldOrType) {
      return function* (values) {
        const wrappedDoc = wrap(db.get(doc));
        this.body = yield wrappedDoc[operation](queryType(fieldOrType)(values));
      };
    };
  };
};

const get = crud("find");
const list = get(simpleQuery);
const filter = get(logicalQuery);

const root = function* () {
  this.body = yield { text: 'hello world' };
};

module.exports = {
  root,
  listProjects: list('projects'),
  findProject: list('projects', 'username'),
  listContributors: list('contributors'),
  findContributor: list('contributors', 'username'),
  filterContributors: filter('contributors-skills', "$or"),
  filterProjects: filter('projects-skills', "$or")
};

