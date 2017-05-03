var burger = require("../models/burger.js");

var controller = function(app) {
	app.get('/', function(req, res) {
		burger.all(function(data) {
			res.render("index", {
				burgers: data
			});
		});
	});

	app.post('/', function(req, res) {
		burger.new('burger_name', req.body.burger, function(data) {
			res.redirect('/');
			console.log(req.body.burger);
		});
	});

	app.put('/', function(req, res) {
		burger.devour('devoured = ' + 1, 'id = ' + req.body.id, function(data) {
			res.redirect('/');
		});
	});
};

module.exports = controller;

	
// module.exports = function(app) {
	// Routes go here

	// app.get("/", function(req, res) {
	// 	var data = orm.selectAll("burgers", function(result) {
	// 		res.render("index", {
	// 			burgers: result
	// 		})
	// 	});
	// });


	// app.post("/", function(req, res) {
	// 	var data = orm.insertOne("burgers", "burger_name", req.body.burger, function(result) {
	// 		res.redirect("/");
	// 		console.log(result);
	// 	});
	// });


	// app.put("/", function(req, res) {
	// 	var data = orm.updateOne("burgers", "devoured", 1, "id", req.body.id, function(result) {
	// 		res.redirect("/");
	// 		console.log(req.body.id);
	// 		console.log(result);
	// 	});
	// });
// };