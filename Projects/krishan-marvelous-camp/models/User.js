let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

let User = new mongoose.Model("User", UserSchema);

module.exports = User;