var burger = require("../models/burgers.js");
var express = require("express");
var router = express.Router();

router.get("/", (req, res)=>{
	burger.allBurgers((data)=>{
		var hbsObj = { burgers : data }
		res.render("index", hbsObj);
	});
});

router.post("/", (req, res)=>{
	burger.insertBurger(req.body.newBurgerName, (data)=>{
		res.redirect("/");
	});
});

router.post("/:id", (req, res)=>{
		console.log(`ID: ${req.params.id}`);
	burger.updateBurger(req.params.id, req.body.name, true, (data)=>{
		res.redirect("/");
	});
});

module.exports = router;