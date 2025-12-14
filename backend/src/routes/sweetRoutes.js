const express = require("express");
const router = express.Router();

const sweetController = require("../controllers/sweetController");
const { adminOnly } = require("../middleware/authMiddleware");

router.get("/", sweetController.getSweets);
router.post("/", adminOnly, sweetController.addSweet);
router.post("/:id/purchase", sweetController.purchase);
router.post("/:id/restock", adminOnly, sweetController.restock);

module.exports = router;
