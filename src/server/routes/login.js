const express = require("express");
const LoginController = require("../controllers/login");
const router = express.Router();

router.post("/", LoginController.post);

module.exports = router;