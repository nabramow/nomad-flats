const express = require('express');
const flatController = require('../controllers/flatController.js');
const router = express.Router();

router.get('/', flatController.getFlats, (req, res) => {
  res.status(200).json(res.locals.flats);
});