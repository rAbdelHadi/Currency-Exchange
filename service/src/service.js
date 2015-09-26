var xmldoc = require('xmldoc');
var exchangeRates = require("./dao/exchangeRates.js");
var request = require('request');

var service = {
    lastRunTime: null,
    getExchangeRates: function (apiUrl, callback) {
        request(
            {
                method: "GET"
                , uri: apiUrl
                , json: true
            }
            , function (error, response, body) {
                if (error)
                    callback(error, null);
                else
                    callback(null, body);
            }
        );
    },
    process: function (callback) {

        var _handleInsertExchangeRate = function (err, result) {
            if (err)
                console.log(err)
            else {
                console.log("insert currency :" + result.currency + " " + "rate :" + result.rate);
                callback(null, true);
            }
        };

        var _handleGetXml = function (err, xmlBody) {
            if (err)
                console.log(err);
            else {
                var document = new xmldoc.XmlDocument(xmlBody);
                var cubes = document.children["2"].children;//Get all cubes
                for (var i = 0; i < cubes.length; i++) {
                    var currencyRates = cubes[i].children;//Get All currency rates
                    var rateDate = new Date(cubes[i].attr.time);
                    if (service.lastRunTime == null || rateDate > service.lastRunTime) {
                        for (var j = 0; j < currencyRates.length; j++) {
                            var params = {
                                currency: currencyRates[j].attr.currency,
                                rate: currencyRates[j].attr.rate,
                                rateDate: rateDate
                            };
                            exchangeRates.insert(params, _handleInsertExchangeRate);
                        }
                    }
                    else
                        break;//exist the parent loop because the rate date already processed
                }
            }
        };

        service.getExchangeRates("http://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml", _handleGetXml);

    }
}

module.exports = service;