const sweetService = require("../services/sweetService");

exports.getSweets = async (req, res) => {
  const sweets = await sweetService.getAllSweets();
  res.json(sweets);
};

exports.addSweet = async (req, res) => {
  const sweet = await sweetService.addSweet(req.body);
  res.status(201).json(sweet);
};

exports.purchase = async (req, res) => {
  try {
    const sweet = await sweetService.purchaseSweet(req.params.id);
    res.json(sweet);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.restock = async (req, res) => {
  const sweet = await sweetService.restockSweet(
    req.params.id,
    req.body.qty
  );
  res.json(sweet);
};
