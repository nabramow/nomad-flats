const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//  handle parsing request body
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  });

app.get('/flats', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/flats.html'));
});

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000!'));
