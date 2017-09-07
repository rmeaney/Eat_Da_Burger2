//import MySQL Connection.
var connection = require('../config/connection.js');

//Object for all our SQL statement functions
var orm = {
	all:function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput + ' ORDER BY date DESC';
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
				
			}
			cb(result);
		});
	},
	insertNew: function(tableName, burgerName, cb){
		var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES ('" + burgerName + "', false)";

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	updateBurger: function(table, vals, condition, cb){
		var queryString ="UPDATE " + table + " SET " + vals + " WHERE " + condition;
			
			connection.query(queryString, function(err, result){
				if(err) throw err;
				cb(result);	
			});
			
	}
}
module.exports = orm;
