const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(200).send('Welcome to the Natter Base API.');
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
