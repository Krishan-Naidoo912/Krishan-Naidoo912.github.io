//=================
// COMMENTS ROUTES
//=================

let express = require("express");
let router = express.Router();
let Campground = require("../models/Campground.js");
let Comment = require("../models/Comment.js");

//REST ROUTE 4 NEW = SHOW COMMENTS FORM
router.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
	Campground.findById(req.params.id, function(err, foundCampGround) {
		if(err) {
			console.log("Could not load Campground to add comments")
		} else {
			console.log("Found Campground to add comments");
			res.render("addNewCampGroundComment", {campground: foundCampGround});
		}
	});
});

//REST ROUTE 3 CREATE = ADD COMMENTS TO CAMPGROUND
router.post("/campgrounds/:id/comments", isLoggedIn,function(req, res) {
	Campground.findById(req.params.id, function(err, foundCampGround) {
		if(err) {
			console.log("Could not load Campground to add comments")
			res.redirect("/campgrounds");
		} else {
			Comment.create(req.body.comment, function(err, newComment) {
				if(err) {
					console.log("Could not add comment to campground")
				} else {
					//add username and id to comment
					newComment.author.id = req.user._id;
					newComment.author.username = req.user.username;
					//save comment
					newComment.save();
					foundCampGround.comments.push(newComment);
					foundCampGround.save();
					res.redirect("/campgrounds/"+ foundCampGround._id);
				}
			});
		}
	});
});

//Check if user is logged in to view or add CampGround comments
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
};

module.exports = router;