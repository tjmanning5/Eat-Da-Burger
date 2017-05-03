var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},

	new: function(objCol, objData, cb) {
		orm.insertOne('burgers', objData, function(res) {
			cb(res);
		});
	},

	devour: function(obj, condition, cb) {
		orm.updateOne('burgers', obj, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;