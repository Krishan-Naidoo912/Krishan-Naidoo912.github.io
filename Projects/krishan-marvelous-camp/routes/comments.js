//=================
// COMMENTS ROUTES
//=================

let express = require("express");
let router = express.Router();
let Campground = require("../models/Campground.js");
let Comment = require("../models/Comment.js");
//Import middleware
let middlewareObj = require("./middleware.js")

//REST ROUTE 2 NEW = SHOW COMMENTS FORM
router.get("/campgrounds/:id/comments/new", middlewareObj.isLoggedIn, function(req, res) {
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
router.post("/campgrounds/:id/comments", middlewareObj.isLoggedIn, function(req, res) {
	Campground.findById(req.params.id, function(err, foundCampGround) {
		if(err) {
			console.log("Could not load Campground to add comments")
			res.redirect("/campgrounds");
		} else {
			Comment.create(req.body.comment, function(err, newComment) {
				if(err) {
					//Flash message if use is not logged in
					req.flash("flashMessageError", "Cannot Create Comment");
					console.log("Could not add comment to campground")
				} else {
					//add username and id to comment
					newComment.author.id = req.user._id;
					newComment.author.username = req.user.username;
					//save comment
					newComment.save();
					foundCampGround.comments.push(newComment);
					foundCampGround.save();
					//Flash message if use is not logged in
					req.flash("flashMessageSuccess", "Succesfully Added Comment!");
					res.redirect("/campgrounds/"+ foundCampGround._id);
				}
			});
		}
	});
});

//REST ROUTE 5 EDIT = SHOW EDIT COMMENTS FORM
router.get("/campgrounds/:id/comments/:comment_id/edit",middlewareObj.checkCampGroundCommentOwnership, function(req, res) {
	Comment.findById(req.params.comment_id, function(err, foundCampGroundComment){
		if(err) {
			console.log("Could not find comments with id " + req.params.comment_id)
			res.redirect("back");
		} else {
			res.render("editCampGroundComment", {campground_id: req.params.id, comment: foundCampGroundComment});
		}	
	});
});

//REST ROUTE 6 UPDATE = UPDATE COMMENTS
//First check if logged in user has permission to edit this campground
router.put("/campgrounds/:id/comments/:comment_id", middlewareObj.checkCampGroundCommentOwnership, function(req, res) {
	//Find and update the correct Comment
	//1.ID to find 2.Data to update 3.Call back function
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedCampGroundComment) {
		if(err) {
			console.log("Cound not update campground comment with id " + req.params.comment_id);
			res.redirect("back");
		} else {
			req.flash("flashMessageSuccess","Succesfully Edited Comment")
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
	//Redirect to show page
});

//REST ROUTE 7 DELETE = DELETE COMMENT
router.delete("/campgrounds/:id/comments/:comment_id", middlewareObj.checkCampGroundCommentOwnership, function(req, res) {
	Comment.findByIdAndRemove(req.params.comment_id, function(err) {
		if(err) {
			res.redirect("back");
		} else {
			req.flash("flashMessageSuccess","Succesfully deleted Comment");
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

module.exports = router;


//==========
// OLD CODE
//==========


//============
// Middleware
//============

// //Check if user is logged in to view or add CampGround comments
// function isLoggedIn(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect("/login");
// };


// //Middleware toCheck if logged in user has permission to Edit or delete Campground Comment
// function checkCampGroundCommentOwnership(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		Comment.findById(req.params.comment_id, function(err, foundCampGroundComment) {
// 			if(err) {
// 				res.redirect("back");
// 			} else {
// 				//Does user own Comment?
// 				//If Yes, then move on to the rest of the code in Edit or delete
// 				if(foundCampGroundComment.author.id.equals(req.user._id)) {
// 					next();
// 				} else {
// 					res.redirect("back");
// 				}
// 			}
// 		});
// 	}
// }