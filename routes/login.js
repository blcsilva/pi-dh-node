var express = require('express');
var router = express.Router();
const controller = require('../controller/login');

/* GET about listing. */
router.get('/', controller.login);

module.exports = router;