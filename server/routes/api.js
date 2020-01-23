const express = require('express');
const flatController = require('../controllers/flatController.js');

const router = express.Router();

router.delete('/delete/:id', flatController.deleteFlat, (req, res, next) => {
  console.log('made it to router delete!');
});

router.get('/', flatController.getFlats, (req, res) => {
  // console.log('made it to router get request!');
  res.json(res.locals.flats);
  // next is causing some header issue "Cannot set headers after they are sent to the client" so uncommented
  // next();
});

router.post('/submit',
  flatController.addFlat, (req, res, next) => {
    next();
  });

module.exports = router;
