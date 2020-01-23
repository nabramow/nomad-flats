const db = require('../models/flatModels.js');

const flatController = {};

flatController.getFlats = (req, res, next) => {
  db.query('SELECT * FROM flats', (error, results) => {
    if (error) {
      console.log(error.stack);
    } else {
      console.log('res.locals ', res.locals);
      res.locals.flats = results.rows;
      next();
    }
  });
};

flatController.addFlat = (req, res, next) => {
  const {
    startdate, enddate, country, stateloc, city, email,
  } = req.body;

  db.query('INSERT INTO flats (startdate, enddate, country, stateloc, city, email) VALUES ($1, $2, $3, $4, $5, $6)', [startdate, enddate, country, stateloc, city, email], (error, results) => {
    if (error) {
      throw error;
    }
    next();
  });
};

module.exports = flatController;
