var express = require('express');

var router = express.Router();

//import the model (burger,js) to use its database functions
var burger = require('../models/burger.js');
//create all our routes

router.get('/', function(request, response){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		response.render('index', hbsObject);
	});
});

router.post('/', function(request, response){
	burger.insertNew(request.body.burger, function(){
		response.redirect('/');
	});
});
router.put('/:id', function(request, response){
	console.log(request.body);
	var condition = 'id = ' + request.params.id;
	var value = 'devoured = ' + request.body.devoured;
	console.log(condition);
	burger.updateBurger(value, condition, function(){
		response.redirect('/');
	});
});

module.exports = router;