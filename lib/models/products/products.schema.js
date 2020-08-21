'use strict';

const mongoose = require('mongoose');

const Products = mongoose.Schema({
  category: {type: String, required: true},
});

module.exports = mongoose.model('product', Products);
