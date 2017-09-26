var connection = require('../models/connection');
var UserModel = require('../models/user.model');
var jwt = require('jsonwebtoken');
var config = require('config');
const MESS = require('../constants/message');
var auth = require('../services/auth.service');
module.exports = {
	login : function (req, res) {
		if(req.body.email && req.body.password) {
			UserModel.getOne(req.body.email).then(function (data){
				if(data){
						auth.comparePassword(req.body.password, data.password).then(function (data) {
							if(data){
								res.json({status: 1, message : MESS.MESS_SUCCESS, token:jwt.sign({email:req.body.email}, config.jwtKey)});
							}else {
								res.json({status:0 , message: MESS.PASSWORD_INVALID});
							}
						});
				}else {
					res.json({status:0,message:MESS.EMAIL_NOT_EXSIST});
				}
			});
		}else {
			res.json({
				status: 0,
				message: MESS.EMAIL_PASSWORD_EMPTY	
			});
		};
	},

	register : function (req, res) {
		if(req.body.email && req.body.password) {
			let body = {
				email: req.body.email,
				password: req.body.password
			}
			if(body.email) {
				UserModel.getOne(req.body.email).then(function (data){
					if(data){
						res.json({status: 0, message:"Email exsist!!"});
					}else {
						UserModel.create(body).then( function (data){
							if(data) {
								res.json({status: 1, message : MESS.MESS_SUCCESS});
							} else {
								res.json({status: 0, message: "Can't add new account"})
							}
						});
					}
				});
			}
		}else {
			res.json({
				status: 0,
				message: MESS.EMAIL_PASSWORD_EMPTY	
			});
		};
	},
	getUser : function (req, res) {
		UserModel.getAll().then (function (data) {
			res.json(data);
		})
	}
}