'use strict';

const express = require('express');
const router = express.Router();

// route callbacks
const getProducts = (req, res) => {

  let output = {
    count: 1,
    results: [],
  };

  res.status(200).json(output);

};

router.get('/products', getProducts);


module.exports = router;
