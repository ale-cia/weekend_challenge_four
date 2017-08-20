var express = require('express');
var bodyParser = require('body-parser');
var employees = require('./routes/employees');
// var pool = require('./modules/pool.js');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('*/', employees);

app.use('/employees', employees);

app.listen(port, function() {
	console.log('listening on port', port);
});
