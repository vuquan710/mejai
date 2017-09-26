var connection = require('./connection');
var Promise = require('promise');
var auth = require('../services/auth.service');

module.exports = {
    getAll : function (req, res) {
        return new Promise(function (resolve, reject) {
            connection(function (db) {
                db.collection('users').find({}).toArray(function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            })
        })
    },
    create : function (body) {
        return new Promise (function (resolve, reject) {
            auth.cryptPassword(body.password).then(function (data) {
                if(data){
                    body.password = data;
                    connection(function (db){
                        db.collection('users').insert(body,(function (err,data) {
                                if(err){
                                    reject(err);
                                }else {
                                    resolve(data);
                                }
                        }));     
                    });  
                }
            });
        });
    },
    getOne : function (body) {
        return new Promise(function (resolve, reject) {
            connection(function (db) {
                db.collection('users').findOne({email:body}, (function (err,data) {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(data);
                    }
                }));
            })
        })
    }

}