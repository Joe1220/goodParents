const express = require("express");
const BabyController = require("../controllers/baby");
const router = express.Router();

router.get("/baby", BabyController.get);
router.post("/baby", BabyController.post);
router.put("/baby", BabyController.put);
router.delete("/baby", BabyController.delete);

module.exports = router;