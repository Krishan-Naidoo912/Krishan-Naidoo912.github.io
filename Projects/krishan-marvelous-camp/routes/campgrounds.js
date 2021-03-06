//====================
// CAMPGROUNDS ROUTES
//====================

let express = require("express");
let router = express.Router();
let Campground = require("../models/Campground.js");
//Import middleware
let middlewareObj = require("./middleware.js")

//REST ROUTE 1 = INDEX
router.get("/campgrounds", function(req, res) {
	//ver1
	//res.render("campGrounds", {campgrounds: campgrounds});

	//ver2
	//find all campgrounds from mongoDB
	Campground.find(
		{},
		function(err, dbCampGrounds){
			if(err) {
				console.log("Error retrieving campgrounds from mongodb" + err);
			} else {
				res.render("index", {campgrounds: dbCampGrounds});				
			}
		}
	)
});

//REST ROUTE 2 = NEW
router.get("/campgrounds/addNewCampGround", middlewareObj.isLoggedIn, function(req, res) {
	res.render("addNewCampGround")
});

//REST ROUTE 3 = CREATE
router.post("/campgrounds", middlewareObj.isLoggedIn, function(req, res) {
	let name = req.body.name;
	let image = req.body.image;
	let price = req.body.price;
	let description = req.body.description;
	let author = {
		id: req.user._id,
		username: req.user.username
	};
	let newCampGround = {name: name, image: image, price: price, description: description, author: author};
	//ver1
	//campgrounds.push(newCampGround);
	//res.redirect("/campgrounds");
	//ver2
	Campground.create(newCampGround,
		function(err, newDbCampGround) {
			if(err) {
				console.log("Error saving CampGround to MongoDB" + err);
			} else {
				console.log("CampGround added to MongoDB CampGround");
				console.log(newCampGround);
				res.redirect("/campgrounds");
			}
		}
	);
}
);

//REST ROUTE 4 = SHOW
router.get("/campgrounds/:id", function(req, res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampGround) {
		if(err) {
			console.log("Cannot find Campground using the ID you provided" + err);
		} else {
			console.log(foundCampGround);
			res.render("showCampGroundInfo", {campground: foundCampGround});
		}
	})
});

//REST ROUTE 5 = EDIT
//First check if logged in user has permission to view this campground edit form
//Second find Campground ID in mongo db, if found pass campground as object to Edit form
router.get("/campgrounds/:id/edit", middlewareObj.checkCampGroundOwnership, function(req, res) {
	Campground.findById(req.params.id, function(err, foundCampGround) {
		res.render("editCampGround.ejs", {campground: foundCampGround});
	});
});

//REST ROUTE 6 = UPDATE
//First check if logged in user has permission to edit this campground
router.put("/campgrounds/:id", middlewareObj.checkCampGroundOwnership, function(req, res) {
	//Find and update the correct Campground
	//1.ID to find 2.Data to update 3.Call back function
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampGround) {
		if(err) {
			console.log("Cound not update campground with id " + req.params.id);
			res.redirect("/campgrounds");
		} else {
			req.flash("flashMessageSuccess","Succesfully Edited Campground")
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
	//Redirect to show page
});

//REST ROUTE 7 - DELETE
//First check if logged in user has permission to delete this campground
router.delete("/campgrounds/:id", middlewareObj.checkCampGroundOwnership, function(req, res) {
	Campground.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			console.log("Cound not delete campground with id " + req.params.id);
			res.redirect("/campgrounds");
		} else {
			req.flash("flashMessageSuccess","Succesfully Deleted Campground")
			console.log("Success - Deleted campground with id " + req.params.id);
			res.redirect("/campgrounds");
		}
	});
});

module.exports = router;


//=========
// OLD CODE
//=========

// //Middleware to Check if user is logged in to view or add CampGrounds
// function isLoggedIn(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect("/login");
// };

// //Middleware toCheck if logged in user has permission to Edit or delete Campground
// function checkCampGroundOwnership(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		Campground.findById(req.params.id, function(err, foundCampGround) {
// 			if(err) {
// 				res.redirect("back");
// 			} else {
// 				//Does user own Campground?
// 				//If Yes, then move on to the rest of the code in Edit or delete
// 				if(foundCampGround.author.id.equals(req.user._id)) {
// 					next();
// 				} else {
// 					res.redirect("back");
// 				}
// 			}
// 		});
// 	}
// }