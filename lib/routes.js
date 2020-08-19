'use strict';

const express = require('express');
const router = express.Router();

// route callbacks
const getProducts = (req, res) => {

  let output = {
    count: 1,
    results: [],
  };

  res.status(200).send(output);

};

const getProductsByID = (req, res) => {
  console.log(req);
  console.log(res);
};

const addProduct = (req, res) => {

  let newProduct = {
    id: 1,
    description: req.body,
  };

  res.status(201).send(newProduct);
};

// const editProduct = (req, res) => {

// };

// const deleteProduct = (req, res) => {

// };

// route calls
router.get('/products', getProducts);
router.get('products/:id', getProductsByID);
router.post('products', addProduct);
// router.put('products/:id', editProduct);
// router.delete('/products/:id', deleteProduct);

module.exports = router;
