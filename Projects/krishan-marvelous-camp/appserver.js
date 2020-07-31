//ver1 = App with data stored in local variables
//ver2 = App with data stored in Atlas cloud mongoDB "mongodb+srv://Krishan:Naidoo@krishannaidoo.gny8h.mongodb.net/krishan-marvelous-camp"

let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
//Import Campground Mongoose Model
let Campground = require("./models/Campground.js");
//Import Comments Mongoose Model
let Comment = require("./models/Comment.js"); 
//Import User Mongoose Model
let User = require("./models/User.js");
//Import script to initiate Database
let seedDB = require("./seeds.js");

seedDB();

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Set up MongoDB for CampGrounds
//mongo "mongodb+srv://krishannaidoo.gny8h.mongodb.net/test" --username Krishan (password = Naidoo)
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb+srv://Krishan:Naidoo@krishannaidoo.gny8h.mongodb.net/krishan-marvelous-camp");


// Campground.create(
// 	{
// 		name: "CampA",
// 		image: "/images/Camp-Ground-A.jpg",
// 		description:"Lovely Camp!"
// 	},
// 	function(err, campground){
// 		if(err) {
// 			console.log("Error adding Camp to Campgound ", err);
// 		} else {
// 			console.log("NEWLEY CREATED CAMPGROUND: ");
// 			console.log(campground);
// 		}
// 	}
// );

//ver1: used var instead of database
// let campgrounds = [
// 		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
// 		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
// 		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
// 		{name: "CampD", image: "/images/Camp-Ground-B.jpg"},
// 		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
// 		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
// 		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
// 		{name: "CampD", image: "/images/Camp-Ground-B.jpg"},
// 		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
// 		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
// 		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
// 		{name: "CampD", image: "/images/Camp-Ground-B.jpg"}	
// 	]


app.get("/", function(req, res) {
	res.render("landingPage");
});


//=============
// CAMPGROUNDS
//=============

//REST ROUTE 1 = INDEX
app.get("/campgrounds", function(req, res) {
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
app.get("/campgrounds/addNewCampGround", function(req, res) {
	res.render("addNewCampGround")
});

//REST ROUTE 3 = CREATE
app.post("/campgrounds", function(req, res) {
	let name = req.body.name;
	let image = req.body.image;
	let description = req.body.description;
	let newCampGround = {name: name, image: image, description: description};
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
app.get("/campgrounds/:id", function(req, res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampGround) {
		if(err) {
			console.log("Cannot find Campground using the ID you provided" + err);
		} else {
			console.log(foundCampGround);
			res.render("showCampGroundInfo", {campground: foundCampGround});
		}
	})
});


//==========
// COMMENTS
//==========

//REST ROUTE 2 NEW = SHOW COMMENTS FORM
app.get("/campgrounds/:id/comments/new", function(req, res) {
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
app.post("/campgrounds/:id/comments", function(req, res) {
	Campground.findById(req.params.id, function(err, foundCampGround) {
		if(err) {
			console.log("Could not load Campground to add comments")
			res.redirect("/campgrounds");
		} else {
			Comment.create(req.body.comment, function(err, newComment) {
				if(err) {
					console.log("Could not add comment to campground")
				} else {
					foundCampGround.comments.push(newComment);
					foundCampGround.save();
					res.redirect("/campgrounds/"+ foundCampGround._id);
				}
			});
		}
	});
});

app.listen(3001, function() {
	console.log("Krishan Marvelous Camp AppServer is running on port 3001")
});