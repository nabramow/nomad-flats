const db = require('../models/flatModels.js');

const flatController = {};

flatController.getFlats = (req, res, next) => {
  const flatQuery = '';
  db.query(flatQuery, (err, resFlats) => {
    console.log(res.locals);
  });
};
