'use strict';

const express = require('express');
const router = express.Router();

const products = require('../lib/models/products/products.collection.js');
const categories = require('../lib/models/categories/categories.collection.js');

function getID(req, res, next) {
  req.id = req.params.id;
  next();
}

function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
  case 'products':
    req.model = products;
    next();
    return;
  case 'categories':
    req.model = categories;
    next();
    return;
  }

}

router.param('id', getID);
router.param('model', getModel);

function handleGetAll(req, res, next) {
  req.model.read()
    .then(results => {
      let count = results.length;
      res.json({count, results});
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.find(id)
    .then(record => {
      res.json(record);
    })
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.save(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(next);
}

function handlePatch(req, res, next) {
  let id = req.params.id;
  req.model.findByIdAndUpdate(id)
    .then(record => {
      res.json(record);
    })
    .catch(next);
}

function handleDelete(req, res, next) {
  let id = req.params.id;
  req.model.delete(id)
    .then(result => {
      res.send('deleted', result.id);
    })
    .catch(next);
}

router.get('/products', handleGetAll);
router.get('/products/:id', handleGetOne);
router.post('/products', handlePost);
router.put('/products/:id', handlePatch);
router.delete('/products/:id', handleDelete);

router.get('/categories', handleGetAll);
router.get('/categories/:id', handleGetOne);
router.post('/categories', handlePost);
router.put('/categories/:id', handlePatch);
router.delete('/categories/:id', handleDelete);

module.exports = router;
