var express = require('express');
var router = express.Router();
const controller = require('../controller/cadastro');

/* GET about listing. */
router.get('/', controller.cadastro);

module.exports = router;