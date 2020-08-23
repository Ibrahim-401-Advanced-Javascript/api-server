'use strict';

const schema = require('./products.schema.js');
const model = require('../datamodel.js');

class Product extends model {}

module.exports = new Product(schema);
