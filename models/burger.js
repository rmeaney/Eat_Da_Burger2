var orm = require('../config/orm.js');

var burger ={
	all: function(cb){
		orm.all('burgers', function(response){
			cb(response)
		});
	},
	insertNew: function(vals, cb){
		orm.insertNew('burgers', vals, function(response){
			cb(response);
		});
	},
	updateBurger: function(vals, condition, cb){
		orm.updateBurger('burgers', vals, condition, function(response){
			cb(response);
		});
	}

};
module.exports = burger;