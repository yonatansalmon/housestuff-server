const express = require('express');
const router = express.Router();
const supermarketController = require('../controllers/supermarketController');

router.get('/supermarket-list', supermarketController.getAllItems);
router.post('/supermarket-list', supermarketController.addItem);
router.delete('/supermarket-list/:id', supermarketController.deleteItem);

module.exports = router;
