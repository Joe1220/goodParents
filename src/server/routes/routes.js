const express = require("express");
const controller = require("../controllers");
const router = express.Router();

router.get("/foodDetail", controller.foodDetail.get);

module.exports = router;
