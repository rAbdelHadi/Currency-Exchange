var mysql = require("../da/mysqlDataAccess.js");

module.exports = {
	insert: function (params, callback) {
		var cmd = mysql.createCommand('exchangeRates_insert');
		cmd.addParam("_currency",params.currency);
		cmd.addParam("_rate",params.rate);
		cmd.addParam("_rateDate",params.rateDate);
		cmd.getDataObject(function (err, data) {
			if (err)
				callback(err);
			else if (data)
				callback(null, data)

		});
	}
};