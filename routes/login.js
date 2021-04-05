var express = require('express');
var router = express.Router();
const entrar = require('../controller/login');

/* GET about listing. */
router.get('/', entrar.login);
router.post('/',entrar.loginAction);

module.exports = router;