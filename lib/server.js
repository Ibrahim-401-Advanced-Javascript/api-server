'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const router = require('./routes.js');


// global middleware

// step in front of all requests, inspect it for a body & parse as needed to include it on request
app.use(express.json());

// use express router for routes & callbacks
app.use(router);


module.exports = {
  start: () => {
    app.listen(PORT, () => console.log(`Server Runnin' on Port ${PORT}`));
  },
};
