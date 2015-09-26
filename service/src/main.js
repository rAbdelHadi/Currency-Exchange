var scheduler = require("./dao/scheduler.js");
var service = require('./service');


console.log('*********************************************');
console.log('**************   Currency Exchange Service  *************');
console.log('*********************************************');

var _runService = function(){
    var params = {
        name: "Currency Exchange Service"
    };
    scheduler.getLastRunTime(params, function (err, lastRunTime) {
        if (err) {
            console.log(err);
        } else {
            service.lastRunTime = lastRunTime;
            service.process(function (err, result) {
                if (err)
                    console.log(err);
            });

            params.lastRunDate = new Date();
            scheduler.insert(params, function (err, result) {
                if (err)
                    console.log(err);
            });
        }
    });
};
_runService();
setInterval(_runService, 60 * 60 * 1000);// Run Every one hour to check







