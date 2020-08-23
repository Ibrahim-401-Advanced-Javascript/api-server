'use strict';

const Categories = require('./categories.schema');

class CatActions {

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
    Categories.findByIdAndDelete({_id: new ObjectId(id)});

  }

}

module.exports = CatActions;
