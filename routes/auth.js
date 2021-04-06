var express = require('express');
var router = express.Router(); 
var authController = require('../controller/authcontroller');
 
 
router.get('/', authController.login);

router.post('/',authController.loginAction)
 


module.exports = router;