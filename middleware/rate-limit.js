const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: 'Trop de tentatives de connexion infructueuses : votre compte est inactif pendant cinq minutes !'
})

module.exports = { limiter };
