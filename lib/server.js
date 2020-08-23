'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// custom middleware
const errorHandler = require('../middleware/500');
const notFoundHandler = require('../middleware/404.js');

// step in front of all requests, inspect it for a body & parse as needed to include it on request
app.use(express.json());

// use custom middleware for errors
app.use(errorHandler);
app.use('*', notFoundHandler);

module.exports = {
  start: () => {
    app.listen(PORT, () => console.log(`Server Runnin' on Port ${PORT}`));
  },
};
