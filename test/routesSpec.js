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
  t.true(response.body.length >= 8);
});

test('listContributors returns all contributors', function* (t) {
  const response = {};
  yield routes.listContributors.call(response);
  t.true(response.body.length >= 8);
});

test('filterContributors returns correct number of contributors', function* (t) {
  const response = {};
  yield routes.filterContributors.call(response, 'javascript:2,ramda:1');
  t.true(response.body.length === 6);
});

test('filterProjects returns correct number of projects', function* (t) {
  const response = {};
  yield routes.filterProjects.call(response, 'python:1,koa:0');
  t.true(response.body.length === 2);
});

test('addContributor adds new contributor', function* (t) {
  const response = {};
  yield routes.addContributor.call(response, 'contributor9');
  t.true(response.body.username === 'contributor9');
});

test('addProject adds new project', function* (t) {
  const response = {};
  yield routes.addProject.call(response, 'project9');
  t.true(response.body.username === 'project9');
});
