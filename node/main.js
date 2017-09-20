const express = require('express');
const app = express();
var config = require('config');


const host = config.get('server.host');
const port = config.get('server.port');
var user = require ('./routes/user.js');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/',user);
var server = app.listen(process.env.PORT || port, host, function () {
    console.log('Server is running on port', port);
});



module.exports = app;