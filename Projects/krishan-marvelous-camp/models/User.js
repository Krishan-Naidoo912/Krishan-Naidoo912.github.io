let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

//Add authentication methods to user model
UserSchema.plugin(passportLocalMongoose);

let User = new mongoose.model("User", UserSchema);

module.exports = User;