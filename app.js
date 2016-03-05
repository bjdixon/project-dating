const app = module.exports = require('koa')();
const route = require('koa-route');

// routes middleware
const routes = require('./routes');

app.use(route.get('/', routes.root));
app.use(route.get('/contributors', routes.listContributors));
app.use(route.get('/projects', routes.listProjects));

// start server
app.listen(3000);
console.log('server listening on http://localhost:3000');

