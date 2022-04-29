const express = require('express');

const app = express();

// give access to req.body
app.use(express.json());

// handle CORS security
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// test routes
app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({ message: 'Objet créé !' });
  next();
});

app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;
