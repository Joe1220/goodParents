const express = require("express");
const UsersController = require("../controllers/users");
const router = express.Router();

router.get("/", UsersController.get);

module.exports = router;