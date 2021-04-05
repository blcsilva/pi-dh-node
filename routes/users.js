var express = require('express');
var router = express.Router();
const controllerUsuarios = require('../controller/listarUsuarios');

/* GET about listing. */
router.get('/', controllerUsuarios.listar);

module.exports = router;