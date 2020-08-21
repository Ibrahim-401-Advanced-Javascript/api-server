'use strict';

const express = require('express');
const router = express.Router();

router.param('id', (req, res, next) => {
  req.id = req.params.id;
  next();
});

// route callbacks

// const getCategories = (req, res) => {

//   let output = {
//     count: 1,
//     results: [],
//   };

//   res.status(200).json(output);

// };

// const getCategoriesByID = (req, res) => {

//   let output = {
//     fromParam: req.params.id,
//     fromReq: req.id,
//     sampleProperty: 'abc',
//   };

//   res.status(200).json(output);

// };

// const addCategory = (req, res) => {
//   console.log(req.query);
//   res.status(201).send('added');
// };

async function getCategories() {
  await new CatActions().read();
  res.status(200).send('ok');
}

async function getCategoriesByID() {
  await new CatActions().read().find(id);
  res.status(200).send('ok');
}

async function addCategory() {
  await new CatActions().create(output);
  res.status(201).send('added entry');
}

async function editCategory() {
  await new CatActions().update(id);
  res.status(200).send('updated entry');
}

async function deleteCategory() {
  await new CatActions().delete(id);
  res.status(200).send('deleted entry');
};

// routes
router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriesByID);
router.post('/categories', addCategory);
router.put('/categories/:id', editCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
