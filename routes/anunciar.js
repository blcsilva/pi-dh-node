var express = require('express');
var router = express.Router();
const controller = require('../controller/anunciar');

/* GET about listing. */
router.get('/', controller.anunciar);

module.exports = router;