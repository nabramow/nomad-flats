const express = require('express');
const flatController = require('../controllers/flatController.js');

const router = express.Router();

router.get('/', flatController.getFlats, (req, res, next) => {
  console.log('made it to router get request!');
  console.log('res.locals.flats ', res.locals.flats);
  res.json(res.locals.flats);
  next();
});

router.post('/submit',
  flatController.addFlat, (req, res, next) => {
    console.log('made it to router post!')
    next()
  });


module.exports = router;
