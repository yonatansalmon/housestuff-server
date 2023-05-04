const Supermarket = require('../models/supermarketModel');

exports.getAllItems = async (req, res) => {
  try {
    console.log('first')
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
  });
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

exports.editItem = async (req, res) => {
  const { id } = req.params;
  const { checked } = req.body;

  try {
    const updatedItem = await Supermarket.findByIdAndUpdate(
      id,
      { checked: checked },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error updating item', error });
  }
}