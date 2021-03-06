'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const mongooseOpts = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_PATH, mongooseOpts);

require('./lib/server.js').start(process.env.PORT);

