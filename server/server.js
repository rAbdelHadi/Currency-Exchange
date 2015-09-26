/// create http server //////////////////////////////////////////////////////
var express = require('express');
var http = require('http');

var app = express();
app.set('port',4000);

///enable cross domain posting
var cors= require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/// Register API's
var testAPIs = require('./utils/apiRegistar.js')(app);


/// Run server /////////////////////////////////////////////////////////////////
http.createServer(app).listen(app.get('port'), function () {

});
