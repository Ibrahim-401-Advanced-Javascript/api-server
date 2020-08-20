'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

const productRouter = require('./routes/products.js');
const categoryRouter = require('./routes/products.js');


// global middleware

// step in front of all requests, inspect it for a body & parse as needed to include it on request
app.use(express.json());

// use express router for routes & callbacks
app.use(productRouter);
app.use(categoryRouter);


module.exports = {
  start: () => {
    app.listen(PORT, () => console.log(`Server Runnin' on Port ${PORT}`));
  },
};
