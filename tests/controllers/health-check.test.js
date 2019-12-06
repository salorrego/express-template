const supertest = require('supertest');
const { getHealthCheckStatus } = require('../../src/controllers/health-check/health-check.controller');
const Server = require('../../src/server/server');

describe('Health Check Controller', () => {
  let server;

  beforeAll(() => {
    server = new Server();
    server.setUpApplicationRoutes();
  });

  it('Should return status ok', () => {
    // Arrange
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    const req = {};

    // Act
    getHealthCheckStatus(req, res);

    // Assert
    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({ status: 'ok' });
  });

  it('Should be able to call the health check', (done) => {
    supertest(server.getApp())
      .get('/api/v1/health')
      .then((response) => {
        expect(response.body).toEqual({ status: 'ok' });
        expect(response.status).toEqual(200);
        done();
      });
  });

  it('Should return 404', (done) => {
    supertest(server.getApp())
      .get('/api/v1/noExist')
      .then((response) => {
        expect(response.status).toEqual(404);
        done();
      });
  });
});
