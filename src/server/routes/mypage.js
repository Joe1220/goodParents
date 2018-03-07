const express = require("express");
const BabyController = require("../controllers/baby");
const BillingController = require("../controllers/billing");
const AccountController = require("../controllers/account");
const DeliveryController = require("../controllers/delivery");
const router = express.Router();

router.get("/baby", BabyController.get);
router.post("/baby", BabyController.post);
router.put("/baby", BabyController.put);
router.delete("/baby", BabyController.delete);

router.get("/billing", BillingController.get);
router.put("/billing", BillingController.put);

router.get("/account", AccountController.get);
router.put("/account", AccountController.put);

router.get("/delivery", DeliveryController.get);
router.post("/delivery", DeliveryController.post);
router.put("/delivery", DeliveryController.put);
router.delete("/delivery", DeliveryController.delete);

module.exports = router;