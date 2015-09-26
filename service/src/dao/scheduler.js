var mysql = require("../da/mysqlDataAccess.js");

module.exports = {
	insert: function (params, callback) {
		var cmd = mysql.createCommand('scheduler_insert');
		cmd.addParam("_name",params.name);
		cmd.addParam("_lastRunDate",params.lastRunDate);
		cmd.getDataObject(function (err, data) {
			if (err)
				callback(err);
			else
				callback(null, data)

		});
	},
	getLastRunTime : function(params, callback){
		var cmd = mysql.createCommand('scheduler_selectLastRunTime');
		cmd.addParam("_name",params.name);
		cmd.getScalar(function (err, data) {
			if (err)
				callback(err);
			else
				callback(null, data)

		});
	}
};