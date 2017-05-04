var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('./public'));
 
require("./controllers/burger_controller.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});