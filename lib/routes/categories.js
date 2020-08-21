'use strict';

const express = require('express');
const router = express.Router();

router.param('id', (req, res, next) => {
  req.id = req.params.id;
  next();
});

// route callbacks

const getCategories = (req, res) => {

  let output = {
    count: 1,
    results: [],
  };

  res.status(200).json(output);

};

const getCategoriesByID = (req, res) => {

  let output = {
    fromParam: req.params.id,
    fromReq: req.id,
    sampleProperty: 'abc',
  };

  res.status(200).json(output);

};

const addCategory = (req, res) => {
  console.log(req.query);
  res.status(201).send('added');
};

// routes
router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriesByID);
router.post('/categories', addCategory);
// router.put('/categories/:id', editCategory);
// router.delete('/categories/:id', deleteCategory);

module.exports = router;
