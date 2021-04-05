var express = require('express');
var router = express.Router();
const registrar = require('../controller/cadastro');

/* GET about listing. */
router.get('/', registrar.cadastro);
router.post('/', registrar.cadastroEfetuado);

module.exports = router;