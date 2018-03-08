const express = require("express");
const BabyController = require("../controllers/baby");
const BillingController = require("../controllers/billing");
const CounselingController = require("../controllers/counseling");
const AccountController = require("../controllers/account");
const DeliveryController = require("../controllers/delivery");
const OrderController = require("../controllers/order");
const ExchangeController = require("../controllers/exchange");

const router = express.Router();

router.get("/baby", BabyController.get);
router.post("/baby", BabyController.post);
router.put("/baby", BabyController.put);
router.delete("/baby", BabyController.delete);

router.get("/billing", BillingController.get);
router.put("/billing", BillingController.put);

router.get("/counseling", CounselingController.get);
router.post("/counseling", CounselingController.post);

router.get("/account", AccountController.get);
router.put("/account", AccountController.put);

router.get("/delivery", DeliveryController.get);
router.post("/delivery", DeliveryController.post);
router.put("/delivery", DeliveryController.put);
router.delete("/delivery", DeliveryController.delete);

router.get("/order", OrderController.get);
router.put("/order", OrderController.put);
router.delete("/order", OrderController.delete);

router.get("/exchange", ExchangeController.get);
router.post("/exchange", ExchangeController.post);
router.delete("/exchange", ExchangeController.delete);

module.exports = router;