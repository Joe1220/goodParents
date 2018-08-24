const express = require("express");
const ProductsController = require("../controllers/products");
const router = express.Router();

router.get("/", ProductsController.get);

module.exports = router;