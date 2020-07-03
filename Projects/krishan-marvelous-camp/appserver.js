let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let campgrounds = [
		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
		{name: "CampD", image: "/images/Camp-Ground-B.jpg"},
		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
		{name: "CampD", image: "/images/Camp-Ground-B.jpg"},
		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
		{name: "CampD", image: "/images/Camp-Ground-B.jpg"}	
	]

app.get("/", function(req, res) {
	res.render("landingPage");
});

app.get("/campgrounds", function(req, res) {
	res.render("campGrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	let name = req.body.name;
	let image = req.body.image;
	let newCampGround = {name: name, image: image};
	campgrounds.push(newCampGround);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/addNewCampGround", function(req, res) {
	res.render("addNewCampGround")
});

app.listen(3001, function() {
	console.log("Krishan Marvelous Camp AppServer is running on port 3001")
});