'use strict';

const mongoose = require('mongoose');

const Product = mongoose.Schema({
  category: {type: String, required: true}
});

module.exports = mongoose.model('product', Product);
