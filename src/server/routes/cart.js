const express = require("express");
const CartController = require("../controllers/cart");
const router = express.Router();

router.get("/", CartController.get);
router.post("/", CartController.post);
router.put("/", CartController.put);
router.delete("/", CartController.delete);

router.get("/count", CartController.count);

module.exports = router;