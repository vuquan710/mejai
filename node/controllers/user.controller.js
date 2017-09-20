var connection = require('../models/connection');
var UserModel = require('../models/user.model');
var jwt = require('jsonwebtoken');
module.exports = {
	login : function (req, res) {
		if(req.body.email && req.body.password){
			connection(function (db) {
				db.collection('users').findOne({email:req.body.email, password:req.body.password}).then( function (data) {
					if(!data) {
						res.json({status : false, message : "Wrong username!"});
					} else {
						if(data.authenticate(req.body.password)){
							var token = jwt.sign({
							data: data
							}, configs.jwtKey , { expiresIn : '10m' });
							console.log(req.headers);
							res.json({status : true , message : "Success!" , token : token});
						}
						else res.json({status : false, message : "Wrong password!"});
					}
				});
			});
		} else {
			res.json({
				status: 0,
				message: "User and password invalid"	
			})
		}
		
	},
	register : function (req, res) {
		

	},
	getUser : function (req, res) {
		UserModel.getAll().then (function (data) {
			res.json(data);
		})
	}
}