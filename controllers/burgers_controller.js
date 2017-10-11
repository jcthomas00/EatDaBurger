//file to route http requests to model functions

var burger = require("../models/burgers.js");
var express = require("express");
var router = express.Router();

//root get route
router.get("/", (req, res)=>{
	//call the model function to get all burgers
	burger.allBurgers((data)=>{
		//wrap the returned array in an object 
		var hbsObj = { burgers : data }
		//send object to handlebar for rendering
		res.render("index", hbsObj);
	});
});

//root post route
router.post("/", (req, res)=>{
	//call the model function to insert a burger	
	burger.insertBurger(req.body.newBurgerName, (data)=>{
		//refresh the page after insertion
		res.redirect("/");
	});
});

//root post route with an id 
router.post("/:id", (req, res)=>{
	//call the model function to update a burger based on :id		
	burger.updateBurger(req.params.id, req.body.burgerName, true, (data)=>{
		//refresh the page after update
		res.redirect("/");
	});
});

//package the router for use by the server
module.exports = router;