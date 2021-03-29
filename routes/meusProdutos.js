var express = require('express');
var router = express.Router();
const controller = require('../controller/meusProdutos');

/* GET about listing. */
router.get('/', controller.meusProdutos);

module.exports = router;