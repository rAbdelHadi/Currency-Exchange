var path = require('path');
var fs = require("fs");
var apiHelper = require('../api/apiHelper.js');

module.exports = function (app) {

    apiHelper.init(app);
    var apis = new Array();

    function loadAPI(path, file, loadSubFolders) {
        console.log(path + "/" + file);
        if (file.indexOf('.') > 0) {
            if (file != 'apiHandler.js') {
                var fn = require(path + "/" + file);
                if (typeof (fn) != 'function') return;
                var api = fn(app);
                if (api && api.register) {
                    apis.push(api);
                    api.register(app);
                }
            }
        }
        else if (loadSubFolders) {
            var subpath = path + '/' + file;
            fs.readdirSync(subpath).forEach(function (file) {
                loadAPI(subpath, file, true)
            });
        }
    }

    fs.readdirSync(__dirname + "/../api/").forEach(function (file) {
        loadAPI(__dirname + '/../api/', file, true)
    });

};