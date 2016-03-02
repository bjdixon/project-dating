const parse = require('co-body');

module.exports.root = function* () {
  this.body = yield { text: 'hello world' };
};

