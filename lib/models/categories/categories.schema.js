'use strict';

const mongoose = require('mongoose');

const Category = mongoose.Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model('product', Category);
