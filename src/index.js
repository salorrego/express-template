const express = require('express');
const { join } = require('path');
const createMiddelware = require('swagger-express-middleware');
const { logger } = require('./logger/winston');
const { Routes } = require('./routes');

const app = express();
const swaggerFile = join(__dirname, './api/api.yml');

function setUpApplicationRoutes() {
  return new Routes(app);
}

createMiddelware(swaggerFile, app, (err, middelware) => {
  if (err) {
    logger.error('Error with Swagger Middelware', err);
  }
  app.use(
    middelware.metadata(),
    middelware.files(),
    middelware.CORS(),
    middelware.validateRequest()
  );

  setUpApplicationRoutes();

  app.listen(3000, () => {
    logger.info('Example app listening on port 3000!');
  });
});


module.exports = app;
