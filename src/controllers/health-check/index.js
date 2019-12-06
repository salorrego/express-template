const { Router } = require('express');
const { getHealthCheckStatus } = require('./health-check.controller');

module.exports = Router()
  .get('/health', getHealthCheckStatus);
