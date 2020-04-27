const express = require('express');
const app = express();
const data = require('./data.json');
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'pug')




app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

