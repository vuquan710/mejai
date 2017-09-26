var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var Promise = require('promise');
module.exports = {
  cryptPassword : function(password) {
    return new Promise (function (resolve, reject) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) 
          reject(err);
        bcrypt.hash(password, salt, function(err, hash) {
          if(err) {
            reject(err);
          }else {
            resolve(hash);
          }
        });
      });
    });
  },
  comparePassword : function(plainPass, hashword) {
    return new Promise (function (resolve, reject) {
      bcrypt.compare (plainPass, hashword, function (err, isPasswordMatch){
        if(err){
          reject(err);
        }else {
          resolve(isPasswordMatch);
        }
      })
    })
  }
}