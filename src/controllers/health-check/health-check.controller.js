function getHealthCheckStatus(req, res) {
  res.json({ status: 'ok' });
}

module.exports = {
  getHealthCheckStatus
};
