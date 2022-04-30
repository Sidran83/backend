const express = require('express');
const router = express.Router();

// importation du controller
const saucesCtrl = require('../controllers/sauce');

// importation du middleware d'authentification
const auth = require('../middleware/auth');

router.post('/', auth, saucesCtrl.createSauce);
router.get('/', auth, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);

module.exports = router;
