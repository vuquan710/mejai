var connection = require('./connection');
var Promise = require('promise');
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
    }
}