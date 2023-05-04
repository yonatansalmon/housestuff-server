const express = require('express');
const router = express.Router();
const supermarketController = require('../controllers/supermarketController');

router.get('/', supermarketController.getAllItems);
router.post('/', supermarketController.addItem);
router.delete('/:id', supermarketController.deleteItem);
router.put('/:id', supermarketController.editItem);
module.exports = router;
