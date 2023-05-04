const mongoose = require('mongoose');

const Total = new mongoose.Schema({
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Total', Total);
