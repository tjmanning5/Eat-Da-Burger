var mysql = require("mysql");

// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "nuclearwinter",
// 	database: "burgers_db"
// });

var db = process.env.NODE_ENV === 'production'
            ? process.env.JAWSDB_URL
            : { host: process.env.MYSQL_HOST,
                port: process.env.MYSQL_PORT,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE };


var connection = mysql.createConnection(db);

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;