const express = require('express');
const app = express();
const data = require('./data.json');
const path = require('path');
const port = 3000;

app.use('/static', express.static('public'));

app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('project');
});




app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

