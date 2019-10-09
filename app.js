const express = require('express');
const bodyParser = require('body-parser');
const validateRoute = require('./routes/api/data');
const removeInputRoute = require('./routes/api/input');
const aladdinRoute = require('./routes/api/aladdin');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', validateRoute);
app.use('/api', aladdinRoute);
app.use('/api/remove', removeInputRoute);

app.use('/', (req, res) => {
  res.status(200).send('Welcome to the Natter Base API.');
});

const port = process.env.PORT || 8000;
app.listen(port,
  () =>
  console.log(`Server running on http://localhost:${port}`)
);
module.exports = app;
