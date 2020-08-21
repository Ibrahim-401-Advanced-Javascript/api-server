'use strict';

const Categories = require('./categories.schema');

class CatActions {

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
    await Categories.findByIdAndDelete({_id: new ObjectId(id)});

  }

}

module.exports = CatActions;
