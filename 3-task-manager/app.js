const express = require('express');
const app = express();

const tasks = require('./routes/tasks');

app.use('/api/v1/tasks', tasks);
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('task manager app');
});

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
