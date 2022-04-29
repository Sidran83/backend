const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('requête reçue!');
  next();
});

app.use((req, res) => {
  res.json({ message: 'Message reçu !'})
});



module.exports = app;
