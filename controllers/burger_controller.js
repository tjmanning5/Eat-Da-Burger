var orm = require("../config/orm.js");

module.exports = function(app) {
	// Routes go here

	app.get("/", function(req, res) {
		var data = orm.selectAll("burgers", function(result) {
			res.render("index", {
				burgers: result
			})
		});
	});

	app.put("/", function(req, res) {
		var data = orm.updateOne("burgers", "devoured", 1, "id", req.body.id, function(result) {
			res.redirect("/");
			console.log(req.body.id);
			console.log(result);
		});
	});

	app.post("/", function(req, res) {
		var data = orm.insertOne("burgers", "burger_name", req.body.burger, function(result) {
			res.redirect("/");
			console.log(result);
		});
	});
};