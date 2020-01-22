const express = require('express');
const flatController = require('../controllers/flatController.js');

const router = express.Router();

router.get('/', flatController.getFlats, (req, res, next) => {
  console.log('made it to api router!');
  res.status(200).json(res.locals.flats);
  next();
});

router.post('/submit',
  flatController.addFlat, (req, res, next) => {
    console.log('made it to router post /submit!');
    console.log('router req.body.startdate ', req.body.startdate);
    // res.status(200).json({});
    next();
  });


module.exports = router;
