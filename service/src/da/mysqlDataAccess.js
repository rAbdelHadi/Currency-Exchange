var config = require('../config.js');
var mysqlConnection = require("../mysql/mysqlDAL.js");
console.log('Connect to mysql DB');
module.exports= new mysqlConnection(config.mysql);