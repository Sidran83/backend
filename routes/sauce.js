const express = require('express');
const router = express.Router();

// importation du controller
const saucesCtrl = require('../controllers/sauce');

router.post('/', saucesCtrl.createSauce);
router.get('/', saucesCtrl.getAllSauces);
router.get('/:id', saucesCtrl.getOneSauce);
router.put('/:id', saucesCtrl.modifySauce);
router.delete('/:id', saucesCtrl.deleteSauce);

module.exports = router;
