var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "madonna",
	database: "burgers_db"
});

connection.connect((err)=>{
	if(err){
		console.log(`Error: ${err}`);
	}
	console.log(`Connected to database with ID: ${connection.threadId}`)
});

module.exports = connection;