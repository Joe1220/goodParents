const express = require("express");
const PaymentController = require("../controllers/payment");
const router = express.Router();

router.get("/", PaymentController.get);
router.post("/", PaymentController.post);
router.delete("/", PaymentController.delete);

module.exports = router;