var express = require('express');
var router = express.Router();
const controller = require('../controller/compraFinalizada');

/* GET about listing. */
router.get('/', controller.compraFinalizada);

module.exports = router;