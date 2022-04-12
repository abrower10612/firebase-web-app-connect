const express = require('express');
const { create, readAll } = require('../controllers/post');

const router = express.Router();

router
  .get('/', readAll)
  .post('/', create);

module.exports = router;