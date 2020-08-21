'use strict';

const Products = require('./products.schema');

class ProdActions {

  read() {

    find();

  }

  create() {

    save();

  }

  update() {

    findByIdAndUpdate();

  }

  async delete(id) {

    let ObjectId = require('mongodb').ObjectId;
    await Products.findByIdAndDelete({_id: new ObjectId(id)});

  }

}

module.exports = ProdActions;
