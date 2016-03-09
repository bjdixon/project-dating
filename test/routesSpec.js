import test from 'ava';
const routes = require('../routes');

test('findProject returns correct project', function* (t) {
  const response = {};
  yield routes.findProject.call(response, 'project1');
  t.is(response.body[0]._id, 11);
});

test('findContributor returns correct contributor', function* (t) {
  const response = {};
  yield routes.findContributor.call(response, 'contributor3');
  t.is(response.body[0]._id, 3);
});

test('listProjects returns all projects', function* (t) {
  const response = {};
  yield routes.listProjects.call(response);
  t.true(response.body.length === 8);
});

test('listContributors returns all contributors', function* (t) {
  const response = {};
  yield routes.listContributors.call(response);
  t.true(response.body.length === 8);
});
