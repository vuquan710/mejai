var jwt = require('jsonwebtoken');
var configs = require('../config');

module.exports = {
  authentication : function(req , res , next){
    jwt.verify(req.body.token, configs.jwtKey, function(err, decoded){
      if (err) res.json({status : false , message : err.message});
      else {
        req.user = decoded.data;
        next();
      }
    })
  }
}