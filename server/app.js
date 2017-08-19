var express = require('express');
var bodyParser = require('body-parser');
var message = require('./routes/employees');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/employees', employees);

app.listen(port, function() {
	console.log('listening on port', port);
});
