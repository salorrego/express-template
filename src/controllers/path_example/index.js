const { Router } = require('express');
const { postPathExample } = require('./path-example.controller');

module.exports = Router()
  .get('/path_example/:val', postPathExample);
