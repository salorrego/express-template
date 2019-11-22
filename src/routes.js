const config = require('config');
const { HealthCheckRouter } = require('./controllers/health-check.controller');

class Routes {
  constructor(app) {
    this.baseUrl = config.baseUrl;
    this.addRoutes(app);
  }

  addRoutes(app) {
    app.use(this.baseUrl, HealthCheckRouter);
  }
}

module.exports = {
  Routes
};
