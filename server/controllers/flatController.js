const db = require('../models/flatModels.js');

const flatController = {};

flatController.getFlats = (req, res, next) => {
  db.query('SELECT * FROM flats', (error, results) => {
    if (error) {
      console.log(error.stack);
    } else {
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

flatController.deleteFlat = (req, res, next) => {
  const { id } = req.params;
  console.log('flatcontroller id req ', id);
  const deleteQuery = 'DELETE FROM flats WHERE id = $1';
  db.query(deleteQuery, [id], (error, results) => {
    if (error) {
      throw error;
    }
    return next();
  });
  // console.log('delete req.params WORKS ', req.params); //nothing

};

module.exports = flatController;
