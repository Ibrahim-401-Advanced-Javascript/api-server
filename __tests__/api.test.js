'use strict';

// use supergoose or supertest
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Server Tests', () => {

  it('should respond with 500 on an error', () => {

    return mockRequest
      .get('/expectedfailure')
      .then(results => {
        expect(results.status).toBe(500);
      })
      .catch(() => { expect(1).toStrictEqual(2); });

  });

  it('should respond with 404 on an invalid route', () => {

    return mockRequest
      .get('/invalidroute')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(() => { expect(1).toStrictEqual(2); });

  });

  it('should respond with 404 on an invalid method', () => {

    return mockRequest
      .submit('/categories')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(() => { expect(1).toStrictEqual(2); });

  });

  it('should respond properly with a request to /categories', () => {

    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(() => { expect(1).toStrictEqual(2); });

  });

  it('should respond properly with a request to /products', () => {

    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(() => { expect(1).toStrictEqual(2); });

  });

});
