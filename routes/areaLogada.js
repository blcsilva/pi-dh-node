var express = require('express');
var router = express.Router();
const areaLogada = require('../controller/areaLogada');

/* GET about listing. */
router.get('/', areaLogada.interno);

module.exports = router;