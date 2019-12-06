const config = require('config');
const HealthCheckRouter = require('../controllers/health-check');
const PathExampleRouter = require('../controllers/path_example');

class Routes {
  constructor(app) {
    this.baseUrl = config.baseUrl;
    this.addRoutes(app);
  }

  addRoutes(app) {
    app.use(this.baseUrl, HealthCheckRouter);
    app.use(this.baseUrl, PathExampleRouter);
  }
}

module.exports = {
  Routes
};
