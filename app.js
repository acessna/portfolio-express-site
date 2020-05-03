const express = require('express');
const app = express();
const data = require('./data.json');
const port = 3000;

app.use('/static', express.static('public'));

app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.render('index', {data} );
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects/:id', (req, res) => {
  data.projects.forEach(project => {
    if(req.params.id === project.id){
      res.render('project', {project})
    }
    
  });
});




app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

