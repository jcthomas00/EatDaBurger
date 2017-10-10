var orm = require("../config/orm.js");

var burgers = {
	allBurgers : function(cb){
		orm.selectAll("burgers", (res)=>{
			cb(res);
		});
	},
	insertBurger : function(burgerName, cb){
		orm.insertOne(burgerName, false,"burgers_db.burgers", (res)=>{
			cb(res)
		});
	},
	updateBurger : function(id, burgerName, eaten, cb){
		orm.updateOne(id, burgerName, eaten, "burgers_db.burgers", (res)=>{
			cb(res);
		})
	}
};

module.exports = burgers;