var apiHandler = require('../apiHandler.js');
var exchangeRates = require('../../dao/exchangeRates.js');


function createAPI(app) {
    var handler = new apiHandler('/api/convert');

    handler.validateData = function (req, res) {
        return req.query.fromCurrency && req.query.toCurrency && req.query.value;
    };

    handler.get = function (req, res) {
        exchangeRates.convert(req.query, function (err, result) {
            if (err)
                res.json(err);
            else
                res.json(result);
        });
    };

    return handler;
}
module.exports = createAPI;