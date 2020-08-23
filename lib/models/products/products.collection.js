'use strict';

const Products = require('./products.schema');

class ProdActions {

  find() {

    findById(id);

  }

  create() {

    save();

  }

  update() {

    findByIdAndUpdate();

  }

  delete(id) {

    let ObjectId = require('mongodb').ObjectId;
    Products.findByIdAndDelete({_id: new ObjectId(id)});

  }

}

module.exports = ProdActions;
