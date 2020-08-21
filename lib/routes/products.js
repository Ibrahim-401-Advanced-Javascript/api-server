'use strict';

const express = require('express');
const router = express.Router();


router.param('id', (req, res, next) => {
  req.id = req.params.id;
  next();
});

// route callbacks

const getProducts = (req, res) => {

  let output = {
    count: 1,
    results: [],
  };

  res.status(200).json(output);

};

const getProductsByID = (req, res) => {

  let output = {
    fromParam: req.params.id,
    fromReq: req.id,
    sampleProperty: 'xyz',
  };

  res.status(200).json(output);

};

const addProduct = (req, res) => {
  console.log(req.query);
  res.status(201).send('added');
};

// routes
router.get('/products', getProducts);
router.get('/products/:id', getProductsByID);
router.post('/products', addProduct);
// router.put('/products/:id', editProduct);
// router.delete('/products/:id', deleteProduct);


module.exports = router;
