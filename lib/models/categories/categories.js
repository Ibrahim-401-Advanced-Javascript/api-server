'use strict';

const schema = require('./categories.schema.js');
const model = require('../datamodel.js');

class Category extends model {}

module.exports = new Category(schema);
