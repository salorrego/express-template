const Server = require('./server/server');

module.exports = new Server()
  .setUpApplicationRoutes()
  .listen();
