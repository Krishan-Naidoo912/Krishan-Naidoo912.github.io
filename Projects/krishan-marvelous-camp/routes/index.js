//================
// GENERAL ROUTES
//================

let express = require("express");
let router = express.Router();
let passport = require("passport");
let User = require("../models/User.js")

//REST ROUTE 1 = Show Register Form
router.get("/register", function(req, res) {
	res.render("register");
});

//REST ROUTE 3 = Handle Sign Up Logic
router.post("/register", function(req, res) {
	//Store User Name
	let express = require("express");
	let router = express.Router();//Pass User Name as first argument and Password as second argument to the passport method User.register. This will encrypt the password before storing
	let newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user) {
		if(err) {
			console.log(err);
			res.render("register");
		} else {
			passport.authenticate("local")(req, res, function() {
				res.redirect("/campgrounds");	
		});
		}
	});
});

//REST ROUTE 1 = Show Login Form
router.get("/login", function(req, res) {
	res.render("login");
});

//REST ROUTE 3 - Handle Login Logic
//app.post("login", auth middleware, callback)
router.post("/login", passport.authenticate("local",
	{
		successRedirect: "/campgrounds",
		failureRedirect: "/login"
	}), function(req, res) {
});

//REST ROUTE 1 = logout route to Index
router.get("/logout", function(req, res) {
	//user passport methods
	req.logout();
	res.redirect("/campgrounds");
});

//Check if user is logged in to view or add CampGround comments
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
};

module.exports = router;