var express = require('express');
const controller = require('../controller/sobre');
var router = express.Router();


/* GET about listing. */
router.get('/', controller.sobre);
  

module.exports = router;
