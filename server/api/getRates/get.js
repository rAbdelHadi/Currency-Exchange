var apiHandler = require('../apiHandler.js');
var exchangeRates = require('../../dao/exchangeRates.js');


function createAPI(app) {
    var handler = new apiHandler('/api/getRates');

    handler.validateData = function (req, res) {
        return req.query.currency;
    };

    handler.get = function (req, res) {
        exchangeRates.getRates(req.query, function (err, rates) {
            if (err)
                res.json(err);
            else
                res.json(rates);
        });
    };

    return handler;
}
module.exports = createAPI;