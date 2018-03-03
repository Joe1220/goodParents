const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");
const AuthMiddleware = require("../middleware/auth");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.use("/check", AuthMiddleware);
router.get("/check", AuthController.check);

module.exports = router;