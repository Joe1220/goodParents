const express = require("express");
const UsersController = require("../controllers/users");
const router = express.Router();

router.get("/users", UsersController.get);

module.exports = router;