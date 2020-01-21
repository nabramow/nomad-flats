const express = require('express');
let app = express();

app.get('/', (req, res) => res.send('HELLO FROM EXPRESS'));
app.use(express.static('assets'));

app.listen(3000, () => console.log('Listening on port 3000!'));
