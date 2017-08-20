var express = require('express');
var router = express.Router();
var pool = require('../modules/pool'); 

router.post('/', function(req, res){
	console.log('attempted to INSERT an employee!');
	// Add an INSERT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			client.query('INSERT INTO employees (first_name, last_name, job_title, employees_salary) VALUES ($1, $2, $3, $4);', [req.body.first_name, req.body.last_name, req.body.job_title, req.body.employees_salary ], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making INSERT database query', errorMakingQuery);
					console.log("Req.Body", req.body);
					res.sendStatus(500);
				} else {
					res.sendStatus(201);
				}
			});
		}
	});
});

router.get('/', function(req, res) {
	// Add a SELECT query
	console.log('in SELECT query');
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			console.log('Get successful');
			client.query('SELECT * FROM employees;', function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making SELECT database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
			});
		}
	});
});

module.exports = router;