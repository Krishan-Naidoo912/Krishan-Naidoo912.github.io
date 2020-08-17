//Middleware for express server routes

let middlewareObj = {};
let Campground = require("../models/Campground.js");
let Comment = require("../models/Comment.js");

//Middleware toCheck if logged in user has permission to Edit or delete Campground
middlewareObj.checkCampGroundOwnership = function(req, res, next) {
	if(req.isAuthenticated()) {
		Campground.findById(req.params.id, function(err, foundCampGround) {
			if(err) {
				req.flash("flashMessageError","Campground Not Found")
				res.redirect("back");
			} else {
				//Does user own Campground?
				//If Yes, then move on to the rest of the code in Edit or delete
				if(foundCampGround.author.id.equals(req.user._id)) {
					next();
				} else {
					//Flash message if use is not logged in
					req.flash("flashMessageError", "You dont have permission to edit Campground!");
					res.redirect("back");
				}
			}
		});
	}
};


//Middleware to Check if user is logged in to view or add CampGrounds
middlewareObj.isLoggedIn = function(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	//Flash Message in login form if user is not logged in then redirect to login page
	req.flash("flashMessageError", "Please log in first to proceed!");
	res.redirect("/login");
};


//Middleware toCheck if logged in user has permission to Edit or delete Campground Comment
middlewareObj.checkCampGroundCommentOwnership = function(req, res, next) {
	if(req.isAuthenticated()) {
		Comment.findById(req.params.comment_id, function(err, foundCampGroundComment) {
			if(err) {
				res.redirect("back");
			} else {
				//Does user own Comment?
				//If Yes, then move on to the rest of the code in Edit or delete
				if(foundCampGroundComment.author.id.equals(req.user._id)) {
					next();
				} else {
					//Flash message if use is not owner of comment
					req.flash("flashMessageError", "You dont have permission to edit comment!");
					res.redirect("back");
				}
			}
		});
	} else {
			//Flash message if use is not logged in
			req.flash("flashMessageError", "Please log in first to proceed!");
			res.redirect("back");
		}
};

module.exports = middlewareObj;