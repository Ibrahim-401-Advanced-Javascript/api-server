'use strict';

const Products = require('./products.schema');
const { findByIdAndRemove } = require('../categories/categories.schema');

class Prod {

  read() {

    find();

  }

  create() {

    save();

  }

  update() {

    findByIdAndUpdate();

  }

  delete() {

    findByIdAndDelete();

  }

}

module.exports = Prod;
