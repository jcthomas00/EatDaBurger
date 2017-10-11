connection = require("./connection.js");

//Object Relational Mapping that allows interaction with burger_db
var orm = {

	//function that selects all burgers and sends it to the passed callback function
	selectAll : function (table = "burgers_db.burgers", cbFunc){
		let sql = "SELECT * FROM ??";
		connection.query(sql, table, (err, res)=>{
			cbFunc(res);
		});
	},

	//insert new row of data given a burger name. Sends result to callback function
	insertOne : function (burgerName, eaten = false, table = "burgers_db.burgers", cbFunc){
		let sql = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
		connection.query(sql, [table, burgerName, eaten], (res)=>{
			cbFunc(res);
		});
	},

	//update a row of data based on given id. Sends result to callback function
	updateOne : function (id, burgerName, eaten, table = "burgers_db.burgers", cbFunc){
		let sql = "UPDATE ?? SET burger_name = ?, devoured = ? WHERE ??.id = ?";
		connection.query(sql, [table, burgerName, eaten, table, id], (res)=>{
			cbFunc(res);
		});
	}

};

//package orm for use by controller
module.exports = orm;