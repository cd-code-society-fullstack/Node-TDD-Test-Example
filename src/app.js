const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];
  res
  .status(200)
  .json(users);
});

module.exports = app;
