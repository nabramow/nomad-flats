const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./routes/api');

//  handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(__dirname, '../build')));

// route handler
app.post('/submit', (req, res) => {
  console.log('made it to app.post upon submit!');
  console.log('app.post req.body.startdate ', req.body);
  // res.send(req.body.username);
});

app.get('/flats', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/flats.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Listening on port 3000!'));

module.exports = app;
