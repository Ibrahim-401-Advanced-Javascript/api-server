'use strict';

const mongoose = require('mongoose');

const Product = mongoose.Schema({
  name: {type: String, required: true},
});

module.exports = mongoose.model('product', Product);
