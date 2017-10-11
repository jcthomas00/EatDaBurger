//file containing all database connection details 

var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "madonna",
	database: "burgers_db"
});

//Make sure DB connection can be initiated
connection.connect((err)=>{
	if(err){
		console.log(`Error: ${err}`);
	}
	console.log(`Connected to database with ID: ${connection.threadId}`)
});

//package connection details for use by ORM
module.exports = connection;