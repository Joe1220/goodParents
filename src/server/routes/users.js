const express = require("express");
const UsersController = require("../controllers/users");
const router = express.Router();

router.get("/list", UsersController.list);
router.post("/assignAdmin", UsersController.assignAdmin);

module.exports = router;