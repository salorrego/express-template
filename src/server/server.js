const express = require('express');
const { join } = require('path');
const createMiddelware = require('swagger-express-middleware');
const { logger } = require('../logger/winston');
const { Routes } = require('./routes');

const swaggerFile = join(__dirname, '../api/api.yml');

module.exports = class Server {
  constructor() {
    this.app = express();

    createMiddelware(swaggerFile, this.app, (err, middelware) => {
      if (err) {
        logger.error('Error with Swagger Middelware', err);
      }
      this.app.use(
        middelware.metadata(),
        middelware.files(),
        middelware.CORS(),
        middelware.validateRequest()
      );

      this.setUpApplicationRoutes();
    });
  }

  setUpApplicationRoutes() {
    this.routes = new Routes(this.app);
    return this;
  }

  getApp() {
    return this.app;
  }

  listen() {
    this.app.listen(3000, () => {
      logger.info('Example app listening on port 3000!');
    });
    return this;
  }
};
