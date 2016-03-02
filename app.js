const app = module.exports = require('koa')();
const route = require('koa-route');

// routes middleware
const routes = require('./routes');
app.use(route.get('/', routes.root));

// start server
app.listen(3000);
console.log('server listening on http://localhost:3000');

