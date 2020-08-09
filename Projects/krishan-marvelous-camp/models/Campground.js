//ver2 Create MongoDB CampGround Schema
let mongoose = require("mongoose");

//create CampGround model to include the person creating the Campground by refering to user object for user details
let campGroundSchema = new mongoose.Schema(
	{
	 	image: String,
	 	name: String,
	 	description: String,
	 	author: {
	 		id: {
	 			type: mongoose.Schema.Types.ObjectId,
	 			ref: "User"
	 		},
	 		username: String
	 	},
	 	comments: [
	 		{
	 			type: mongoose.Schema.Types.ObjectId, //Basically, the comments should be an array of Comment Model ID's
	 			ref: "Comment"
	 		}
	 	]
	}
);

//ver2 Create and export MongoDB CampGround Model (which will now have Schema methods such as .find or .create etc)
let campGroundModel = new mongoose.model("Campground", campGroundSchema);

module.exports = campGroundModel;