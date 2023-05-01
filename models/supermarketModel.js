const mongoose = require('mongoose');

const supermarketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now } 

});

module.exports = mongoose.model('Supermarket', supermarketSchema);
