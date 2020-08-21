'use strict';

// use supergoose or supertest
const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

xdescribe('Server Tests', () => {

  it('should respond with 500 on an error', () => {

  });

  it('should respond with 404 on an invalid route', () => {

  });

  it('should respond with 404 on an invalid method', () => {

  });

});

xdescribe('API Tests', () => {

  it('should', () => {

  });

});

xdescribe('MiddleWare Tests', () => {

  it('should', () => {

  });

});

