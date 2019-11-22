const { Router } = require('express');

const HealthCheckRouter = Router();

HealthCheckRouter.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = {
  HealthCheckRouter
};
