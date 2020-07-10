//ver1 = App with data stored in local variables
//ver2 = App with data stored in Atlas cloud mongoDB "mongodb+srv://Krishan:Naidoo@krishannaidoo.gny8h.mongodb.net/krishan-marvelous-camp"

let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Set up MongoDB for CampGrounds
//mongo "mongodb+srv://krishannaidoo.gny8h.mongodb.net/test" --username Krishan (password = Naidoo)
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb+srv://Krishan:Naidoo@krishannaidoo.gny8h.mongodb.net/krishan-marvelous-camp");

//ver2 Create MongoDB CampGround Schema
let campGroundSchema = new mongoose.Schema(
	{
 		name: String,
	 	image: String,
	 	description: String
	}
);

//ver2 Create MongoDB CampGround Model (which will now have Schema methods such as .find or .create etc)
let Campground = new mongoose.model("Campground", campGroundSchema);
Campground.create(
	{
		name: "CampA",
		image: "/images/Camp-Ground-A.jpg",
		description:"Lovely Camp!"
	},
	function(err, campground){
		if(err) {
			console.log("Error adding Camp to Campgound ", err);
		} else {
			console.log("NEWLEY CREATED CAMPGROUND: ");
			console.log(campground);
		}
	}
);

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
	Campground.findById(req.params.id, function(err, foundCampGround){
		if(err) {
			console.log("Cannot find Campground using the ID you provided" + err);
		} else {
			res.render("showCampGroundInfo", {campground: foundCampGround});
		}
	})
});

app.listen(3001, function() {
	console.log("Krishan Marvelous Camp AppServer is running on port 3001")
});