const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//  handle parsing request body
app.use(bodyParser.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// app.get('/build/bundle.js', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/bundle.js'));
// });

app.listen(3000, () => console.log('Listening on port 3000!'));
