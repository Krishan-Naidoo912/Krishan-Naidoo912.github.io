let mongoose = require("mongoose");

//create comments model to include the person creating the comment by refering to user object for user details
let commentSchema = new mongoose.Schema(
	{
		text: String,
		author: {
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User"
			},
			username: String
		}
	}
);

let Comment = new mongoose.model("Comment", commentSchema);

module.exports = Comment;