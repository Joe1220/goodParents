const express = require("express");
const CartController = require("../controllers/cart");
const router = express.Router();

router.get("/", CartController.get);
router.post("/", CartController.post);
router.put("/", CartController.put);
router.delete("/", CartController.delete);

router.get("/increase", CartController.increase);
router.get("/decrease", CartController.decrease);
router.get("/checktrue", CartController.checkTrue);
router.get("/checkfalse", CartController.checkFalse);

module.exports = router;