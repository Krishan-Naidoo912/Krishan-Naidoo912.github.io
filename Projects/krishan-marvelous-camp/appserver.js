//ver1 = App with data stored in local variables
//ver2 = App with data stored in Atlas cloud mongoDB "mongodb+srv://Krishan:Naidoo@krishannaidoo.gny8h.mongodb.net/krishan-marvelous-camp"

let express 		= require("express");
let app 			= express();
let bodyParser 		= require("body-parser");
let methodOverride  = require("method-override");
let mongoose 		= require("mongoose");
//Import Campground Mongoose Model
let Campground      = require("./models/Campground.js");
//Import Comments Mongoose Model
let Comment 		= require("./models/Comment.js"); 
//Import User Mongoose Model
let User 			= require("./models/User.js");
//Import script to initiate Database
let seedDB 			= require("./seeds.js");
//Setup User Authentication
let passport 		= require("passport");
let LocalStrategy 	= require("passport-local");
//Import Routes
let campgroundRoutes= require("./routes/campgrounds.js");
let commentRoutes	= require("./routes/comments.js");
let indexRoutes		= require("./routes/index.js");
//Import Connect Flash for Flash messages
//to use flash messages, pass req.flash(key,value) example req.flash("flashError","Log in First!")
//Then handle it in the route that you want to show the message, example get Login or Post Register
let flash = require("connect-flash");


//Start app by inserting 3 campgrounds with some comments
//seedDB();

//Set up MongoDB for CampGrounds - Mongo "mongodb+srv://krishannaidoo.gny8h.mongodb.net/test" --username Krishan (password = Naidoo)
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb+srv://Krishan:Naidoo@krishannaidoo.gny8h.mongodb.net/krishan-marvelous-camp");

//Password Configuation
app.use(require("express-session")({
	secret: "krishan naidoo",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//use methodOveride to resplace GET method with PUT method to edit campgrounds
app.use(methodOverride("_method"))
//Activate Flash messages
app.use(flash());

app.use(function(req, res, next) {
	//Get and pass logged in user to all routes and ejs templates so that the nav bar displays Login + Logout + SignUp correctly
	//req.user will be empty if not signed in or contains the current username and id
	res.locals.currentUser = req.user;
	//make flash message available to every route and ejs template
	res.locals.flashMessageError = req.flash("flashMessageError")
	res.locals.flashMessageSuccess = req.flash("flashMessageSuccess")
	next();
});

app.use(indexRoutes);
app.use(commentRoutes);
app.use(campgroundRoutes);

app.get("/", function(req, res) {
	res.render("landingPage");
});

app.listen(3001, function() {
	console.log("Krishan Marvelous Camp AppServer is running on port 3001");
});








//============
// Old code
//============

// // Campground.create(
// // 	{
// // 		name: "CampA",
// // 		image: "/images/Camp-Ground-A.jpg",
// // 		description:"Lovely Camp!"
// // 	},
// // 	function(err, campground){
// // 		if(err) {
// // 			console.log("Error adding Camp to Campgound ", err);
// // 		} else {
// // 			console.log("NEWLEY CREATED CAMPGROUND: ");
// // 			console.log(campground);
// // 		}
// // 	}
// // );

// //ver1: used var instead of database
// // let campgrounds = [
// // 		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
// // 		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
// // 		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
// // 		{name: "CampD", image: "/images/Camp-Ground-B.jpg"},
// // 		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
// // 		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
// // 		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
// // 		{name: "CampD", image: "/images/Camp-Ground-B.jpg"},
// // 		{name: "CampA", image: "/images/Camp-Ground-A.jpg"},
// // 		{name: "CampB", image: "/images/Camp-Ground-B.jpg"},
// // 		{name: "CampC", image: "/images/Camp-Ground-A.jpg"},
// // 		{name: "CampD", image: "/images/Camp-Ground-B.jpg"}	
// // 	]



// //=============
// // CAMPGROUNDS
// //=============

// //REST ROUTE 1 = INDEX
// app.get("/campgrounds", function(req, res) {
// 	//ver1
// 	//res.render("campGrounds", {campgrounds: campgrounds});

// 	//ver2
// 	//find all campgrounds from mongoDB
// 	Campground.find(
// 		{},
// 		function(err, dbCampGrounds){
// 			if(err) {
// 				console.log("Error retrieving campgrounds from mongodb" + err);
// 			} else {
// 				res.render("index", {campgrounds: dbCampGrounds});				
// 			}
// 		}
// 	)
// });

// //REST ROUTE 2 = NEW
// app.get("/campgrounds/addNewCampGround", function(req, res) {
// 	res.render("addNewCampGround")
// });

// //REST ROUTE 3 = CREATE
// app.post("/campgrounds", function(req, res) {
// 	let name = req.body.name;
// 	let image = req.body.image;
// 	let description = req.body.description;
// 	let newCampGround = {name: name, image: image, description: description};
// 	//ver1
// 	//campgrounds.push(newCampGround);
// 	//res.redirect("/campgrounds");
// 	//ver2
// 	Campground.create(newCampGround,
// 		function(err, newDbCampGround) {
// 			if(err) {
// 				console.log("Error saving CampGround to MongoDB" + err);
// 			} else {
// 				console.log("CampGround added to MongoDB CampGround");
// 				console.log(newCampGround);
// 				res.redirect("/campgrounds");
// 			}
// 		}
// 	);
// }
// );

// //REST ROUTE 4 = SHOW
// app.get("/campgrounds/:id", function(req, res) {
// 	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampGround) {
// 		if(err) {
// 			console.log("Cannot find Campground using the ID you provided" + err);
// 		} else {
// 			console.log(foundCampGround);
// 			res.render("showCampGroundInfo", {campground: foundCampGround});
// 		}
// 	})
// });


// //==========
// // COMMENTS
// //==========

// //REST ROUTE 2 NEW = SHOW COMMENTS FORM
// app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
// 	Campground.findById(req.params.id, function(err, foundCampGround) {
// 		if(err) {
// 			console.log("Could not load Campground to add comments")
// 		} else {
// 			console.log("Found Campground to add comments");
// 			res.render("addNewCampGroundComment", {campground: foundCampGround});
// 		}
// 	});
// });

// //REST ROUTE 3 CREATE = ADD COMMENTS TO CAMPGROUND
// app.post("/campgrounds/:id/comments", isLoggedIn,function(req, res) {
// 	Campground.findById(req.params.id, function(err, foundCampGround) {
// 		if(err) {
// 			console.log("Could not load Campground to add comments")
// 			res.redirect("/campgrounds");
// 		} else {
// 			Comment.create(req.body.comment, function(err, newComment) {
// 				if(err) {
// 					console.log("Could not add comment to campground")
// 				} else {
// 					foundCampGround.comments.push(newComment);
// 					foundCampGround.save();
// 					res.redirect("/campgrounds/"+ foundCampGround._id);
// 				}
// 			});
// 		}
// 	});
// });

// //AUTH ROUTES
// //Show Register Form
// app.get("/register", function(req, res) {
// 	res.render("register");
// });

// //Handle Sign Up Logic
// app.post("/register", function(req, res) {
// 	//Store User Name
// 	//Pass User Name as first argument and Password as second argument to the passport method User.register. This will encrypt the password before storing
// 	let newUser = new User({username: req.body.username});
// 	User.register(newUser, req.body.password, function(err, user) {
// 		if(err) {
// 			console.log(err);
// 			res.render("register");
// 		} else {
// 			passport.authenticate("local")(req, res, function() {
// 				res.redirect("/campgrounds");	
// 		});
// 		}
// 	});
// });

// //Login Form
// app.get("/login", function(req, res) {
// 	res.render("login");
// });

// //Login Logic
// //app.post("login", auth middleware, callback)
// app.post("/login", passport.authenticate("local",
// 	{
// 		successRedirect: "/campgrounds",
// 		failureRedirect: "/login"
// 	}), function(req, res) {
// });

// //logout route
// app.get("/logout", function(req, res) {
// 	//user passport methods
// 	req.logout();
// 	res.redirect("/campgrounds");
// });

// //Check if user is logged in to view or add CampGround comments
// function isLoggedIn(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect("/login");
// }
