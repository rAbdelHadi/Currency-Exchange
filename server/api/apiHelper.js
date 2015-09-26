

module.exports = {
    init: function (app) {
        app.all('/*', function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
            if (req.method == "OPTIONS") {
                var headers = {};
                headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
                headers["Access-Control-Allow-Credentials"] = false;
                headers["Access-Control-Max-Age"] = '86400'; // 24 hours
                headers["Access-Control-Allow-Headers"] = "X-File-Upload,X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
                res.writeHead(200, headers);
                res.end();
            } else {
                var forwardHeader = req.headers['x-forwarded-for'];
                req.originatingAddress = ( forwardHeader ? forwardHeader.substring(0, forwardHeader.indexOf(':')) : undefined ) || req.ip;
                var log = {"url": req.url, "method": req.method, "headers": req.headers};
                var p = log.headers.password;
                log.headers.password = 'xxxxx';
                log.originatingAddress = req.originatingAddress;
                log.headers.password = p;
                console.log(">> " + req.url);
                next();  // call next() here to move on to next middleware/router
            }
        });
    }
};