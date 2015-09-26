var mysql = require("../da/mysqlDataAccess.js");

module.exports = {
	getRates: function (params, callback) {
		var cmd = mysql.createCommand('exchangeRates_selectByCurrency');
		cmd.addParam("_currency",params.currency);
		cmd.getDataTable(function (err, data) {
			if (err)
				callback(err);
			else if (data)
				callback(null, data)

		});
	},
	convert: function (params, callback) {
		var cmd = mysql.createCommand('exchangeRates_convert');
		cmd.addParam("_fromCurrency",params.fromCurrency);
		cmd.addParam("_toCurrency",params.toCurrency);
		cmd.addParam("_value",params.value);
		cmd.getScalar(function (err, data) {
			if (err)
				callback(err);
			else if (data)
				callback(null, data)

		});
	}



};