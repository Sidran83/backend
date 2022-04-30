const mongoose = require('mongoose');

// appel du plugin unique validator
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// application du plugin au modèle
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
