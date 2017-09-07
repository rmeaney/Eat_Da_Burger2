//dependencies
var express = require('express');
//set handlebars
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
//var PORT = 3000;




var app = express();

//middleware
//enable static content from the public directory
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set up the override so we can use override a post command with a delete
app.use(methodOverride('_method'));




app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and give the server access to them.
var routes = require('./controllers/burgers-controller.js');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});