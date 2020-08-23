'use strict';

const express = require('express');
const router = express.Router();

const products = require('../lib/models/products/products.js');
const categories = require('../lib/models/categories/categories.js');

function getID(req, res, next) {
  req.id = req.params.id;
  next();
}

// routes need to include /routes/model/ to ensure we are using the
// right module from the models folder
// using middleware, we can put data on the request object:
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
  default:
    next('Invalid Model');
    return;
  }

}

router.param('id', getID);
router.param('model', getModel);

function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({count, results});
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => {
      res.json(record);
    })
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
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

router.get('/api/:model', handleGetAll);
router.get('/api/:model/:id', handleGetOne);
router.post('/api/:model/', handlePost);
router.patch('/api/:model/', handlePatch);
router.delete('/api/:model?:id', handleDelete);


module.exports = router;
