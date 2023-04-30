const Supermarket = require('../models/supermarketModel');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Supermarket.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addItem = async (req, res) => {
  const item = new Supermarket({
    name: req.body.name,
    quantity: req.body.quantity,
    unit: req.body.unit,
  });
  console.log(item)
  try {
    const newItem = await item.save();
    res.status(201).send(newItem);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Supermarket.findByIdAndRemove(id);
    res.status(200).json(deletedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
