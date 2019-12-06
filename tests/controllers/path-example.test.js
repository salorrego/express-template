const supertest = require('supertest');
const { postPathExample } = require('../../src/controllers/path_example/path-example.controller');
const Server = require('../../src/server/server');

describe('Path Example controller', () => {
  let server;

  beforeAll(() => {
    server = new Server();
    server.setUpApplicationRoutes();
  });

  it('Should return same value', () => {
    // Arrange
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    const req = { params: { val: 'test' } };

    // Act
    postPathExample(req, res);

    // Assert
    expect(res.status).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({ val: 'test' });
  });

  it('Should be able to call the health check', (done) => {
    supertest(server.getApp())
      .get('/api/v1/path_example/testing_path_value')
      .then((response) => {
        expect(response.body).toEqual({ val: 'testing_path_value' });
        expect(response.status).toEqual(201);
        done();
      });
  });

  it('Should return 400 bad input', (done) => {
    supertest(server.getApp())
      .get('/api/v1/path_example/d')
      .then((response) => {
        expect(response.status).toEqual(400);
        expect(response.text).toEqual('Bad Request, value cannot be parsed');
        done();
      });
  });
});
