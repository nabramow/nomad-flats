const db = require('../models/flatModels.js');

const flatController = {};

flatController.getFlats = (req, res, next) => {
  const flatQuery = 'SELECT NOW()';
  db.query(flatQuery, (err, resFlats) => {
    if (err) {
      console.log(err.stack);
    } else {
      // console.log('resFlats: ', resFlats);
      next();
    }
  });
};

flatController.addFlat = (req, res, next) => {
  console.log('addFlats req.body.startdate', req.body.startdate);
  next();
};

module.exports = flatController;
