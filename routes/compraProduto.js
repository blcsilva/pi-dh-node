var express = require('express');
var router = express.Router();
const controller = require('../controller/compraProduto');

/* GET about listing. */
router.get('/', controller.compraProduto);

module.exports = router;