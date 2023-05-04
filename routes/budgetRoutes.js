const express = require('express');
const router = express.Router();
const BudgetController = require('../controllers/budgetController');

router.get('/:id', BudgetController.getTotal);
router.post('/total', BudgetController.changeTotal);


module.exports = router;
