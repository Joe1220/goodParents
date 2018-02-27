const express = require("express");
const LoginController = require("../controllers/login");
const router = express.Router();

router.get("/login", LoginController.get);

module.exports = router;