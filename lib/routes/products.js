'use strict';

const express = require('express');
const ProdActions = require('../models/products/products.collection');
const router = express.Router();


router.param('id', (req, res, next) => {
  req.id = req.params.id;
  next();
});

// route callbacks

// const getProducts = (req, res) => {

//   let output = {
//     count: 1,
//     results: [],
//   };

//   res.status(200).json(output);

// };

// const getProductsByID = (req, res) => {

//   let output = {
//     fromParam: req.params.id,
//     fromReq: req.id,
//     sampleProperty: 'xyz',
//   };

//   res.status(200).json(output);

// };

// const addProduct = (req, res) => {
//   console.log(req.query);
//   res.status(201).send('added');
// };

async function getProducts() {
  await new ProdActions().read();
  res.status(200).send('ok');
}

async function getProductsByID() {
  await new ProdActions().read().find(id);
  res.status(200).send('ok');
}

async function addProduct() {
  await new ProdActions().create(output);
  res.status(201).send('added entry');
}

async function editProduct() {
  await new ProdActions().update(id);
  res.status(200).send('updated entry');
}

async function deleteProduct() {
  await new ProdActions().delete(id);
  res.status(200).send('deleted entry');
};

// routes
router.get('/products', getProducts);
router.get('/products/:id', getProductsByID);
router.post('/products', addProduct);
router.put('/products/:id', editProduct);
router.delete('/products/:id', deleteProduct);


module.exports = router;
