const express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cors = require('cors');
router.use(jsonParser);
router.use(urlencodedParser);

var user = require('../controllers/user.controller.js')

router.post('/login', user.login);
router.get('/list-user',user.getUser);

module.exports = router;	