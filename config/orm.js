var connection = require("./connection.js");

var orm = {
	selectAll: function(table, callBackFunc) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			callBackFunc(result);
		});
	},
	insertOne: function(table, colName, nameVal, callBackFunc) {
		var queryString = "INSERT INTO ?? (??) VALUES (?);";
		connection.query(queryString, [table, colName, nameVal], function(err, result) {
			callBackFunc(result);
		});
	},
	updateOne: function(table, updateCol, updateVal, selectorCol, selectorVal, callBackFunc) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [table, updateCol, updateVal, selectorCol, selectorVal], function(err, result) {
			callBackFunc(result);
		});
	}
};

module.exports = orm;