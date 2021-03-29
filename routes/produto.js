var express = require('express');
var router = express.Router();
const controller = require('../controller/produto');

/* GET about listing. */
router.get('/', controller.produto);

module.exports = router;