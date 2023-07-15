const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req.url);
  res.status(200).send('home page');
});

app.get('/about', (req, res) => {
  console.log(req.url);
  res.status(200).send('about page');
});

app.all('*', (req, res) => {
  res.status(404).send('not found');
});

app.listen(5000, () => {
  console.log('server is running on port 5000...');
});
