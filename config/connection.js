var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'UltraMagnus86',
	database: 'burgers_db'
  });
};

// make connection
connection.connect(function(err){
	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}console.log('connected as id: ' + connection.threadId);
});

//export Connections for our orm to use
module.exports = connection;
