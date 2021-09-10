const authRoute = require('./authRoute.js');
const postsRoute = require('./postsRoute.js');

function routes(app) {
  app.use('/api/auth', authRoute);

  app.use('/api/posts', postsRoute);
}

module.exports = routes;
