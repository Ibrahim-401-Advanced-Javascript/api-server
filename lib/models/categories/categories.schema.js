'use strict';

const mongoose = require('mongoose');

const Categories = mongoose.Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model('category', Categories);
