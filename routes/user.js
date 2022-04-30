const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

// appel du middleware pour limiter les tentatives de connexion
const rate = require('../middleware/rate-limit');

router.post('/signup', userCtrl.signup);
router.post('/login',  rate.limiter, userCtrl.login);


module.exports = router;
