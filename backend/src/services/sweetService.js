const Sweet = require("../models/Sweet");

async function getAllSweets() {
  return await Sweet.find();
}

async function addSweet(data) {
  return await Sweet.create(data);
}

async function purchaseSweet(id) {
  const sweet = await Sweet.findById(id);
  if (!sweet || sweet.quantity === 0)
    throw new Error("Out of stock");

  sweet.quantity -= 1;
  return await sweet.save();
}

async function restockSweet(id, qty) {
  const sweet = await Sweet.findById(id);
  sweet.quantity += qty;
  return await sweet.save();
}

module.exports = {
  getAllSweets,
  addSweet,
  purchaseSweet,
  restockSweet
};
