var express = require('express');
var router = express.Router();
const passport = require('passport')
const authController = require('../controller/authcontroller');
require('../auth')(passport);

/* GET about listing. */
router.get('/', authController.login);
router.post('/',authController.login);

module.exports = router;