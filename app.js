const express = require('express');
const mongoose = require('mongoose');

// importation des routers
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://pierredeveix:panoramata@sidran83.5hbgs.mongodb.net/piiquante?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

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

// appel des routes pour me modèle Sauce (url de test pour POSTMAN)
app.use('/api/stuff', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
