const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/idol', controller.idol.get);

module.exports = router;