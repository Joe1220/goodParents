const express = require("express");
const CartController = require("../controllers/cart");
const router = express.Router();

router.get("/", CartController.get);
router.post("/", CartController.post);
router.put("/", CartController.put);
router.delete("/", CartController.delete);

router.post("/increase", CartController.increase);
router.post("/decrease", CartController.decrease);
router.post("/checktrue", CartController.checkTrue);
router.post("/checkfalse", CartController.checkFalse);

module.exports = router;