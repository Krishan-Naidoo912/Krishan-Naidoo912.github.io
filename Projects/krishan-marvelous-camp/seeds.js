let mongoose = require("mongoose");
let Campground = require("./models/Campground.js");
let Comment = require("./models/Comment.js");

let data = [
	{
		name: "Camp Ground TEST A",
		image: "/images/Camp-Ground-A.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  olore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name: "Camp Ground TEST B",
		image: "/images/Camp-Ground-B.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  olore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name: "Camp Ground TEST C",
		image: "/images/Camp-Ground-A.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  olore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]

function seedDB() {
	//Remove All Campgrounds in MongoDB
	Campground.deleteMany({}, function(err) {
		if(err) {
			console.log(err);
		}
		console.log("Removed Camp Grounds");
		//Add a few campgrounds to the MongoDB as part of the deleteMany Call back function, i.e after deleteMany completes
		data.forEach(function(seed) {
			Campground.create(seed, function(err, newCampground) {
				if(err) {
					console.log("Error adding Camp to Campgound ", err);
				} else {
					console.log("NEWLEY CREATED CAMPGROUND: ");
					console.log(newCampground);
					//Add comments as part of the Add Campground Call back function, i.e after Campgrounds are added
					let comment = {
						text: "This place is great!",
						author: "Krishan"
					}
					//Create comment and assotiate with campground
					Comment.create(comment, function(err, newComment) {
						if(err) {
							console.log("Cannot add comment to campground " + err);
						} else {
							newCampground.comments.push(newComment)
							newCampground.save();
							console.log("New Comment added!");
						}
					});
				}
			});
		});
	});
}

module.exports = seedDB;