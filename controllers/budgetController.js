const Total = require('../models/TotalModel');
const TOTAL_ID = '6453a01bcf3a81e328ec130e'

exports.changeTotal = async (req, res) => {
  try {
    const totalObj = await Total.findByIdAndUpdate(TOTAL_ID, { total: req.body.total }, { new: true, upsert: true });
    res.status(200).json(totalObj);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};


exports.getTotal = async (req, res) => {
  try {
    const total = await Total.findById(TOTAL_ID);
    res.status(200).json(total);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
