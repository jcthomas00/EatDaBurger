//file that bridges gap b/w ORM and controller

//import our custon ORM
var orm = require("../config/orm.js");

//Create a burgers controller object with 3 abilities: add, update and select burger(s)
var burgers = {
	//select-all function that calls the ORM's select-all function 
	allBurgers : function(cb){
		orm.selectAll("burgers", (res)=>{
			cb(res);
		});
	},
	//insert function that calls the ORM's insert function 
	insertBurger : function(burgerName, cb){
		orm.insertOne(burgerName, false,"burgers_db.burgers", (res)=>{
			cb(res)
		});
	},
	//update function that calls the ORM's update function 
	updateBurger : function(id, burgerName, eaten, cb){
		orm.updateOne(id, burgerName, eaten, "burgers_db.burgers", (res)=>{
			cb(res);
		})
	}
};

//package burger model for use by the controller
module.exports = burgers;