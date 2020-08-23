'use strict';


class Model {

  constructor(schema) {
    this.schema = schema;
  }

  get(id) {
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }

  post(record) {
    // let newRecord = new this.schema(record); ???
    let newRecord = this.schema(record);
    return newRecord.save();
  }

  findByIdAndUpdate(id) {
    console.log(id);
  }

  delete(id) {
    let ObjectId = require('mongodb').ObjectId;
    this.schema.findByIdAndDelete({_id: new ObjectId(id)});
  }
}

module.exports = Model;
