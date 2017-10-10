connection = require("./connection.js");

var orm = {

	selectAll : function (table = "burgers_db.burgers", cbFunc){
		let sql = "SELECT * FROM ??";
		connection.query(sql, table, (err, res)=>{
//			console.log(res);
			cbFunc(res);
		});
	},

	insertOne : function (burgerName, eaten = false, table = "burgers_db.burgers", cbFunc){
		let sql = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
		connection.query(sql, [table, burgerName, eaten], (res)=>{
			cbFunc(res);
		});
	},

	updateOne : function (id, burgerName, eaten, table = "burgers_db.burgers", cbFunc){
		console.log(`id: ${id}, burgerName: ${burgerName}, eaten: ${eaten}, table: ${table}`);
		let sql = "UPDATE ?? SET burger_name = ?, devoured = ? WHERE ??.id = ?";
		connection.query(sql, [table, burgerName, eaten, table, id], (res)=>{
			console.log(res);
			cbFunc(res);
		});
	}

};

module.exports = orm;