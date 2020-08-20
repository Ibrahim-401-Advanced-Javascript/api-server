'use strict';

const Categories = require('./categories.schema');

class Cat {

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

module.exports = Cat;
