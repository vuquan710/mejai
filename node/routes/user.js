const express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cors = require('cors');
router.use(jsonParser);
router.use(urlencodedParser);

var bcrypt = require('bcrypt');

var user = require('../controllers/user.controller.js')

router.post('/login', user.login);
router.get('/list-user',user.getUser);
router.post('/register',user.register);
router.get('/test', function (){
   bcrypt.genSalt(10, function (err,salt) {
       console.log(salt);
       let password = "123123";
       bcrypt.hash(password,salt,function (err,hash) {
           console.log(hash)
       })
   }) 
})

module.exports = router;	